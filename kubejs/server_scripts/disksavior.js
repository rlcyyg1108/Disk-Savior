/*导出所有配方，需要在kubejs目录下手动创建recipes文件夹，有点卡
ServerEvents.recipes(event=>{
    event.forEachRecipe({},recipe=>{
        JsonIO.write("./recipes/" + String(recipe.getId()).replace(/:|\//g, '_') + ".json",recipe.json)
    })
})

如果你克隆了本仓库并进行了修改，那么下面的的git指令就能帮你打包一个zip文件
git ls-files --full-name | grep -vE '/$|^.gitignore$|^LICENSE$' > list.txt && 7z a -tzip 硬盘拯救者v.zip @list.txt && rm list.txt



从这段我的世界GTCEu模组代码中，仅提取所有包含raw的粗矿物品ID（去重），忽略其他所有内容，生成标准JS数组，每个ID前面添加 16384x ，格式为 "16384x gtceu:raw_xxx"，不要多余代码、不要注释、不要空值。



从下面的代码中提取所有输入和输出，规则如下：
1.物品(i)格式："数量x 物品ID"，流体(f)格式："流体ID 数量"；
2.排除包含circuit的内容；
3.输入和输出如果有相同ID，互相抵消数量，直到其中一方为0，只保留抵消后剩余不为0的部分；
4.最终只输出两个纯净JS数组：const inputs = [] 和 const outputs = []
关于第三点，你要把这个复杂代码看出多个小数组，每个小数组都包含输入和输出，你先要进行通分，而且是对一个小数组进行的通分，随后再进行抵消，这是因为这是一条产线，现在做的事是进行计算，计算综合的输入和输出，所以你才需要进行通分和抵消
你可以将其理解为配平，只不过，现在这是多个反应，你需要对每个反应进行配平，将多个反应视为一个黑盒，给出综合的输入和输出
下面是待转换物品：





从代码中提取所有输入输出，物品(i)格式："数量x 物品ID"，流体(f)格式："流体ID 数量"，适用于每一个项，也就是说每一项都有''，排除含`circuit`的内容；将数据拆分为多条独立配方，逐条完成通分配比后合并计算，若某配方输出为其他配方输入，抵消计算时忽略催化剂限制，直接对相同ID的输入输出进行数量抵消，仅保留抵消后数量不为0的结果；每项一行，最终按固定格式输出：
    .itemInputs('数量x 物品')
    .inputFluids('流体 数量')
    .itemOutputs('数量x 输出物品')
    .outputFluids('流体 数量')
不要注释、不要修改结构、不要多余内容。



按下面这个固定格式，把我给的转成KubeJS组装机配方，不要注释、不要修改结构
gtr.assembler("自定义ID")
    .itemInputs('数量x 物品')
    .inputFluids('流体 数量')
    .itemOutputs('数量x 输出物品')
    .outputFluids('流体 数量')
    .EUt(GTValues.VA[GTValues.电压])
    .duration(时间)

以下是待转换物品：




todo
新手大礼包
加点彩蛋
产物太多的jei警告
说到糖，让湿件和生物系列电路板能吃你们觉得怎么样
巨型橡胶树
蒸汽发电卡住（偶发）
蒸汽发电升级蒸汽太多jei拖不进去
碎岩机电解
样板大礼包





加警告
done
小集成矿处下调···
石化脱硫数值调整···
流体加热蒸汽换机器···
硫酸铜直出电解```
大马士革钢粉出不了···
星球矿物不全···
大化反镧系···
大化反铟粉···
大虚采电解···
单步环戊二烯化锎···
优化铊粉？···
远古残害电解···
普通空气加强···
装配线压缩进阶装配线···
霜原碎片我改成霜原星方块电解了···
流体钻机电解重构···
粒子对撞批处理修复bug···
富勒烯有配方冲突啊···
电解屠宰场缺鸡肉···
装配线教程···
样板调试工具教程···
硝酸锕镭```
部件装配线下调···
量子点···




*/
//全局变量，用于给其他脚本做兼容
global.disksavior = true
PlayerEvents.loggedIn(event => {
    const player = event.player;
    player.tell("§a欢迎使用『§r§e硬盘拯救者§r§a』!")
    player.tell("§a当前版本为§r §eV16")
    player.tell("§a本私货自带任务书,请仔细阅读")
    player.tell("§7========================================")
    player.tell("§c⚠️不装GTL additions可能会报错")
    player.tell("§c⚠️本私货需要在GTL core开启原始虚空采矿机")
    player.tell("§7========================================")
    player.tell("§l§e推荐安装")
    player.tell("§b - 产线爆破")
    player.tell("§b - 产线撕裂")
    player.tell("§b - GTL additions")
    player.tell("§b - 高级舱室（给GTL提供批处理功能，巨幅减少卡顿）")
    player.tell("§7========================================")
    player.tell("§e祝你游戏愉快!")
})
ServerEvents.recipes(event => {
    const gtr = event.recipes.gtceu
    const packed_infinity_cell = (cellname, type, list) => {//从产线撕裂里扒过来的，感谢@？（-5周目max小登） 
        const list_length = list.length
        let a = "1L,"
        a = a.repeat(list_length - 1) + '1L'
        let b = "{\"#c\":\"ae2:i\",id:\"expatternprovider:infinity_cell\",tag:{record:{\"#c\":\"ae2:" + type + "\",id:\"" + list[0] + "\"}}}"
        for (let i = 1; i < list_length; i++) {
            b = b + ",{\"#c\":\"ae2:i\",id:\"expatternprovider:infinity_cell\",tag:{record:{\"#c\":\"ae2:" + type + "\",id:\"" + list[i] + "\"}}}"
        }
        return Item.of('ae2:portable_item_cell_16k',
            "{RepairCost:0,amts:[L;" + a + "],display:{Name:'{\"text\":\"" + cellname + "\"}'},ic:" + list_length + "L,internalCurrentPower:20000.0d,keys:[" + b + "]}")
    }
    //染料元件包
    gtr.assembler('disksavior:dye_pack')
        .itemInputs('32x gtceu:salt_dust')
        .inputFluids('gtceu:sulfuric_acid 4000')
        .itemOutputs(packed_infinity_cell('染料元件包', 'f', ['gtceu:black_dye', 'gtceu:blue_dye', 'gtceu:brown_dye', 'gtceu:cyan_dye', 'gtceu:gray_dye', 'gtceu:green_dye', 'gtceu:light_blue_dye', 'gtceu:lime_dye', 'gtceu:magenta_dye', 'gtceu:orange_dye', 'gtceu:pink_dye', 'gtceu:purple_dye', 'gtceu:red_dye', 'gtceu:white_dye', 'gtceu:yellow_dye', 'gtceu:light_gray_dye']))
        .duration(200)
        .EUt(GTValues.VA[GTValues.LV])
    //装配线压缩进阶装配线
    gtr.compressor('disksavior:advanced_assembly_line')
        .itemInputs('1024x gtceu:assembly_line')
        .itemOutputs('gtceu:advanced_assembly_line')
        .EUt(GTValues.VA[GTValues.LuV])
        .duration(2000)
    gtr.compressor('disksavior:advanced_assembly_line_unit')
        .itemInputs('1024x gtceu:assembly_line_unit')
        .itemOutputs('gtlcore:advanced_assembly_line_unit')
        .EUt(GTValues.VA[GTValues.LuV])
        .duration(2000)
    //无限中子素涡轮转子元件
    gtr.assembler('disksavior:neutronium_turbine_rotor_infinity_cell')
        .itemInputs(
            '185254x gtceu:tin_rotor',
            '185254x gtceu:lead_rotor',
            '185254x gtceu:iron_rotor',
            '185254x gtceu:bronze_rotor',
            '185254x gtceu:steel_rotor',
            '185254x gtceu:aluminium_rotor',
            '185254x gtceu:chromium_rotor',
            '185254x gtceu:stainless_steel_rotor',
            '185254x gtceu:titanium_rotor'
        )
        .inputFluids('gtceu:glue 185254000')
        .itemOutputs(Item.of('expatternprovider:infinity_cell', '{record:{"#c":"ae2:i",id:"gtceu:turbine_rotor"}}'))
        .duration(2000)
        .EUt(1)
    //蒸汽产出
    gtr.dehydrator('disksavior:steam_is_my_last_life')
        .circuit(1)
        .inputFluids('minecraft:water 2147483648')
        .outputFluids('gtceu:steam 343597383680')
        .EUt(1)
        .duration(200)
    //蒸汽发电加强
    //每次功率提升4个电压，即256倍
    gtr.steam_turbine('disksavior:steam_1')
        .notConsumable('disksavior:steam_1')
        .inputFluids('minecraft:water 163840')
        .outputFluids('gtceu:distilled_water 1024')
        .EUt(-2147483648 * Math.pow(256, 0))
        .duration(10)
    gtr.steam_turbine('disksavior:steam_2')
        .notConsumable('disksavior:steam_2')
        .inputFluids('minecraft:water 41943040')
        .outputFluids('gtceu:distilled_water 262144')
        .EUt(-2147483648 * Math.pow(256, 1))
        .duration(10)
    gtr.steam_turbine('disksavior:steam_3')
        .notConsumable('disksavior:steam_3')
        .inputFluids('minecraft:water 10737418240')
        .outputFluids('gtceu:distilled_water 67108864')
        .EUt(-2147483648 * Math.pow(256, 2))
        .duration(10)
    gtr.steam_turbine('disksavior:steam_4')
        .notConsumable('disksavior:steam_4')
        .inputFluids('minecraft:water 2748779069440')
        .outputFluids('gtceu:distilled_water 17179869184')
        .EUt(-2147483648 * Math.pow(256, 3))
        .duration(10)
    gtr.steam_turbine('disksavior:steam_is_my_last_life')
        .notConsumable('disksavior:steam_is_my_last_life')
        .inputFluids('minecraft:water 703687441776640')
        .outputFluids('gtceu:distilled_water 4398046511104')
        .EUt(-2147483648 * 2147483648)//不知道为什么写Math.pow(256, 4)会溢出
        .duration(10)
    //蒸汽是我最后的生命……
    //蒸汽基础
    gtr.mixer('disksavior:steam_1')
        .itemInputs(
            '1024x gtceu:steam_mega_turbine',
            '4096x gtceu:double_stainless_steel_plate',
            '1024x gtceu:stainless_steel_huge_fluid_pipe',
            '1024x gtceu:titanium_rotor',
            'minecraft:stone_sword'
        )
        .inputFluids('gtceu:glue 185254', 'gtceu:steam 8192')
        .itemOutputs('disksavior:steam_1')
        .EUt(GTValues.VA[GTValues.IV])
        .duration(2000)
    //蒸汽少侠
    gtr.mixer('disksavior:steam_2')
        .itemInputs(
            '1024x gtceu:supercritical_steam_turbine',
            '4096x gtceu:double_tungsten_carbide_plate',
            '1024x gtceu:tungsten_carbide_huge_fluid_pipe',
            '1024x gtceu:tungsten_steel_rotor',
            'minecraft:shears'
        )
        .inputFluids('gtceu:glue 1852540', 'gtceu:steam 2097152')
        .itemOutputs('disksavior:steam_2')
        .EUt(GTValues.VA[GTValues.ZPM])
        .duration(2000)
    //蒸汽大侠
    gtr.mixer('disksavior:steam_3')
        .itemInputs(
            '1024x gtceu:large_naquadah_reactor',
            '4096x gtceu:double_duranium_plate',
            '1024x gtceu:duranium_huge_fluid_pipe',
            '1024x gtceu:neutronium_rotor',
            'gtceu:red_alloy_foil'
        )
        .inputFluids('gtceu:glue 18525400', 'gtceu:steam 536870912')
        .itemOutputs('disksavior:steam_3')
        .EUt(GTValues.VA[GTValues.UHV])
        .duration(2000)
    //蒸汽巨侠
    gtr.mixer('disksavior:steam_4')
        .itemInputs(
            '64x gtceu:advanced_hyper_reactor',
            '64x gtceu:dyson_sphere',
            '4096x gtceu:double_seaborgium_plate',
            '1024x gtceu:enderium_huge_fluid_pipe',
            '1024x gtceu:quantanium_rotor',
            'minecraft:snow_block'
        )
        .inputFluids('gtceu:glue 185254000', 'gtceu:steam 137438953472')
        .itemOutputs('disksavior:steam_4')
        .EUt(GTValues.VA[GTValues.UXV])
        .duration(2000)
    //此身定为蒸汽所天成
    gtr.mixer('disksavior:steam_is_my_last_life')
        .itemInputs(
            '1024x gtceu:annihilate_generator',
            '4096x gtceu:double_chaos_plate',
            '1024x gtceu:transcendentmetal_huge_fluid_pipe',
            '1024x gtceu:draconium_rotor',
            'minecraft:dirt'
        )
        .inputFluids('gtceu:glue 1852540000', 'gtceu:steam 35184372088832')
        .itemOutputs('disksavior:steam_is_my_last_life')
        .EUt(GTValues.VA[GTValues.MAX])
        .duration(3705080)
    //圆石爆奇点
    gtr.electric_implosion_compressor('disksavior:singularity_cobblestone')
        .circuit(1)
        .itemInputs('256000x minecraft:cobblestone')
        .itemOutputs('ae2:singularity')
        .EUt(GTValues.VA[GTValues.LuV])
        .duration(200)
    //圆石爆物质球
    gtr.electric_implosion_compressor('disksavior:matter_ball')
        .circuit(2)
        .itemInputs('256000x minecraft:cobblestone')
        .itemOutputs('1000x ae2:matter_ball')
        .EUt(GTValues.VA[GTValues.LuV])
        .duration(200)
    //工作台合成带nbt的量子纠缠态奇点
    event.shaped(Item.of('ae2:quantum_entangled_singularity', 2, '{freq:177377961050100L}'), [
        "AB ",
        "   ",
        "   "
    ], {
        A: 'ae2:singularity',
        B: 'gtceu:ender_pearl_dust'
    })
    //极高密度量子色动力学爆弹
    gtr.compressor('disksavior:quantum_chromodynamic_charge_super')
        .itemInputs('16384x kubejs:quantum_chromodynamic_charge')
        .itemOutputs('disksavior:quantum_chromodynamic_charge_super')
        .EUt(GTValues.VA[GTValues.OpV])
        .duration(420)
    //原始虚空矿机用水
    gtr.primitive_void_ore('disksavior:water')
        .inputFluids('minecraft:water 1')
        .outputFluids('gtceu:steam 1852050421')
        .duration(200)
    //灵魂沙
    gtr.mixer('disksavior:soul_sand')
        .itemInputs('minecraft:sand')
        .inputFluids('minecraft:lava 100')
        .itemOutputs('minecraft:soul_sand')
        .EUt(GTValues.VA[GTValues.ULV])
        .duration(10)
    //凋零骷髅头
    gtr.lightning_processor('disksavior:wither_skeleton_skull')
        .itemInputs(
            '4x gtceu:carbon_dust',
            'minecraft:skeleton_skull'
        )
        .itemOutputs('minecraft:wither_skeleton_skull')
        .EUt(GTValues.VA[GTValues.HV])
        .duration(200)
    //草
    gtr.lightning_processor('disksavior:grass')
        .itemInputs('minecraft:wheat_seeds')
        .itemOutputs('minecraft:grass')
        .EUt(GTValues.VA[GTValues.ULV])
        .duration(10)
    //草方块
    gtr.mixer('disksavior:grass_block')
        .circuit(2)
        .itemInputs('minecraft:grass', 'minecraft:dirt')
        .inputFluids('minecraft:water 100')
        .itemOutputs('minecraft:grass_block')
        .EUt(GTValues.VA[GTValues.ULV])
        .duration(10)
    //蒸汽冷冻蒸馏水（意义不明）
    gtr.vacuum_freezer('disksavior:steam_water')
        .inputFluids('gtceu:steam 160000')
        .outputFluids('gtceu:distilled_water 1000')
        .EUt(GTValues.VA[GTValues.ULV])
        .duration(1)
    //部件装配线外壳压缩升阶
    gtr.mixer('disksavior:component_assembly_line_casing_stack_1')
        .itemInputs('4x gtlcore:component_assembly_line_casing_lv')
        .itemOutputs('gtlcore:component_assembly_line_casing_mv')
        .EUt(GTValues.VA[GTValues.LV])
        .duration(200)
    gtr.mixer('disksavior:component_assembly_line_casing_stack_2')
        .itemInputs('4x gtlcore:component_assembly_line_casing_mv')
        .itemOutputs('gtlcore:component_assembly_line_casing_hv')
        .EUt(GTValues.VA[GTValues.MV])
        .duration(200)
    gtr.mixer('disksavior:component_assembly_line_casing_stack_3')
        .itemInputs('4x gtlcore:component_assembly_line_casing_hv')
        .itemOutputs('gtlcore:component_assembly_line_casing_ev')
        .EUt(GTValues.VA[GTValues.HV])
        .duration(200)
    gtr.mixer('disksavior:component_assembly_line_casing_stack_4')
        .itemInputs('4x gtlcore:component_assembly_line_casing_ev')
        .itemOutputs('gtlcore:component_assembly_line_casing_iv')
        .EUt(GTValues.VA[GTValues.EV])
        .duration(200)
    gtr.mixer('disksavior:component_assembly_line_casing_stack_5')
        .itemInputs('4x gtlcore:component_assembly_line_casing_iv')
        .itemOutputs('gtlcore:component_assembly_line_casing_luv')
        .EUt(GTValues.VA[GTValues.IV])
        .duration(200)
    gtr.mixer('disksavior:component_assembly_line_casing_stack_6')
        .itemInputs('4x gtlcore:component_assembly_line_casing_uv')
        .itemOutputs('gtlcore:component_assembly_line_casing_uhv')
        .EUt(GTValues.VA[GTValues.UHV])
        .duration(200)
    gtr.mixer('disksavior:component_assembly_line_casing_stack_7')
        .itemInputs('4x gtlcore:component_assembly_line_casing_uhv')
        .itemOutputs('gtlcore:component_assembly_line_casing_uev')
        .EUt(GTValues.VA[GTValues.UHV])
        .duration(200)
    gtr.mixer('disksavior:component_assembly_line_casing_stack_8')
        .itemInputs('4x gtlcore:component_assembly_line_casing_uev')
        .itemOutputs('gtlcore:component_assembly_line_casing_uiv')
        .EUt(GTValues.VA[GTValues.UHV])
        .duration(200)
    gtr.mixer('disksavior:component_assembly_line_casing_stack_9')
        .itemInputs('4x gtlcore:component_assembly_line_casing_uiv')
        .itemOutputs('gtlcore:component_assembly_line_casing_uxv')
        .EUt(GTValues.VA[GTValues.UHV])
        .duration(200)
    gtr.mixer('disksavior:component_assembly_line_casing_stack_10')
        .itemInputs('4x gtlcore:component_assembly_line_casing_uxv')
        .itemOutputs('gtlcore:component_assembly_line_casing_zpm')
        .EUt(GTValues.VA[GTValues.UXV])
        .duration(200)
    gtr.mixer('disksavior:component_assembly_line_casing_stack_11')
        .itemInputs('4x gtlcore:component_assembly_line_casing_uxv')
        .itemOutputs('gtlcore:component_assembly_line_casing_opv')
        .EUt(GTValues.VA[GTValues.UHV])
        .duration(200)
    gtr.mixer('disksavior:component_assembly_line_casing_stack_12')
        .itemInputs('4x gtlcore:component_assembly_line_casing_opv')
        .itemOutputs('gtlcore:component_assembly_line_casing_max')
        .EUt(GTValues.VA[GTValues.UHV])
        .duration(200)
    //并行控制仓压缩升阶
    gtr.mixer('disksavior:parallel_hatch_stack_1')
        .itemInputs('4x gtceu:iv_parallel_hatch')
        .itemOutputs('gtceu:luv_parallel_hatch')
        .EUt(GTValues.VA[GTValues.IV])
        .duration(20)
    gtr.mixer('disksavior:parallel_hatch_stack_2')
        .itemInputs('4x gtceu:luv_parallel_hatch')
        .itemOutputs('gtceu:zpm_parallel_hatch')
        .EUt(GTValues.VA[GTValues.IV])
        .duration(20)
    gtr.mixer('disksavior:parallel_hatch_stack_3')
        .itemInputs('4x gtceu:zpm_parallel_hatch')
        .itemOutputs('gtceu:uv_parallel_hatch')
        .EUt(GTValues.VA[GTValues.IV])
        .duration(20)
    gtr.mixer('disksavior:parallel_hatch_stack_4')
        .itemInputs('4x gtceu:uv_parallel_hatch')
        .itemOutputs('gtceu:uhv_parallel_hatch')
        .EUt(GTValues.VA[GTValues.IV])
        .duration(20)
    gtr.mixer('disksavior:parallel_hatch_stack_5')
        .itemInputs('4x gtceu:uhv_parallel_hatch')
        .itemOutputs('gtceu:uev_parallel_hatch')
        .EUt(GTValues.VA[GTValues.IV])
        .duration(20)
    gtr.mixer('disksavior:parallel_hatch_stack_6')
        .itemInputs('4x gtceu:uev_parallel_hatch')
        .itemOutputs('gtceu:uiv_parallel_hatch')
        .EUt(GTValues.VA[GTValues.IV])
        .duration(20)
    gtr.mixer('disksavior:parallel_hatch_stack_7')
        .itemInputs('4x gtceu:uiv_parallel_hatch')
        .itemOutputs('gtceu:uxv_parallel_hatch')
        .EUt(GTValues.VA[GTValues.IV])
        .duration(20)
    gtr.mixer('disksavior:parallel_hatch_stack_8')
        .itemInputs('4x gtceu:uxv_parallel_hatch')
        .itemOutputs('gtceu:opv_parallel_hatch')
        .EUt(GTValues.VA[GTValues.IV])
        .duration(20)
    gtr.mixer('disksavior:parallel_hatch_stack_9')
        .itemInputs('4x gtceu:opv_parallel_hatch')
        .itemOutputs('gtceu:max_parallel_hatch')
        .EUt(GTValues.VA[GTValues.IV])
        .duration(20)
    gtr.mixer('disksavior:parallel_hatch_stack_10')
        .itemInputs('4x gtceu:max_parallel_hatch')
        .itemOutputs('gtladditions:super_parallel_hatch')
        .EUt(GTValues.VA[GTValues.IV])
        .duration(20)
    //部件装配线下调IV
    gtr.assembler("disksavior:component_assembly_line")
        .itemInputs('256x gtceu:assembly_line', '256x gtceu:assembly_line_casing', '512x gtceu:assembly_line_unit', '256x gtceu:iv_robot_arm', '512x gtceu:iv_conveyor_module', '512x gtceu:iv_electric_motor', '256x kubejs:luv_universal_circuit', '320x kubejs:iv_universal_circuit', '384x kubejs:ev_universal_circuit')
        .inputFluids('gtceu:glue 185254000')
        .itemOutputs('gtceu:component_assembly_line')
        .EUt(GTValues.VA[GTValues.LuV])
        .duration(2000)
    //无线电网输出终端下调IV
    gtr.assembler('disksavior:wireless_energy_network_output_terminal')
        .itemInputs(
            '185254x gtmthings:iv_262144a_wireless_laser_source_hatch',
            '1024x gtceu:hssg_coil_block',
            '16384x gtceu:power_substation',
            '4096x gtceu:high_power_casing',
            '4096x gtceu:samarium_iron_arsenic_oxide_hex_wire',
            '4096x gtceu:indium_tin_barium_titanium_cuprate_hex_wire',
            '4096x gtceu:uranium_rhodium_dinaquadide_hex_wire',
            '185254x gtceu:normal_laser_pipe',
            'minecraft:dirt'
        )
        .inputFluids('gtceu:glue 185254000')
        .itemOutputs('gtladditions:wireless_energy_network_output_terminal')
        .EUt(GTValues.VA[GTValues.LuV])
        .duration(2000)
    //无线电网输入终端下调OPV
    gtr.assembler('disksavior:wireless_energy_network_input_terminal')
        .itemInputs(
            '256x gtmthings:opv_67108864a_wireless_laser_target_hatch',
            '1024x kubejs:starmetal_coil_block',
            '16384x gtceu:power_substation',
            '4096x gtceu:high_power_casing',
            '4096x gtceu:echoite_hex_wire',
            '4096x gtceu:legendarium_hex_wire',
            '4096x gtceu:draconiumawakened_hex_wire',
            '185254x gtceu:normal_laser_pipe',
            'minecraft:dirt'
        )
        .inputFluids('gtceu:glue 185254000')
        .itemOutputs('gtladditions:wireless_energy_network_input_terminal')
        .EUt(GTValues.VA[GTValues.MAX])
        .duration(185254)
    //创造计算机下调到IV
    gtr.assembler('disksavior:creative_computation_provider')
        .itemInputs(
            '1024x gtceu:high_performance_computation_array',
            '4096x gtceu:hpca_computation_component',
            '4096x gtceu:hpca_active_cooler_component',
            '1024x gtceu:hpca_bridge_component',
            '64x gtceu:network_switch',
            '1024x gtceu:cold_ice_freezer',
            '185x minecraft:ice',
            '254x minecraft:packed_ice',
            '2minecraft:blue_ice'
        )
        .inputFluids('gtceu:glue 185254000')
        .itemOutputs('gtceu:creative_computation_provider')
        .EUt(GTValues.VA[GTValues.LuV])
        .duration(2000)
    //创造数据访问仓下调到IV
    gtr.assembler('disksavior:creative_data_access_hatch')
        .itemInputs(
            '256x gtceu:iv_scanner',
            '256x gtceu:data_access_hatch',
            '4096x gtceu:data_stick',
            '4096x gtceu:data_orb',
            '256x gtceu:data_transmitter_hatch',
            '256x gtceu:data_receiver_hatch',
            '16384x gtceu:normal_optical_pipe'
        )
        .inputFluids('gtceu:glue 185254000')
        .itemOutputs('gtceu:creative_data_access_hatch')
        .EUt(GTValues.VA[GTValues.LuV])
        .duration(2000)
    //可配置重力绝对洁净维护仓下调LV
    gtr.assembler('disksavior:law_cleaning_gravity_configuration_maintenance_hatch')
        .itemInputs('1024x gtceu:maintenance_hatch')
        .inputFluids('gtceu:glue 185254')
        .itemOutputs('gtceu:law_cleaning_gravity_configuration_maintenance_hatch')
        .EUt(GTValues.VA[GTValues.ULV])
        .duration(2000)
    //单步量子点
    gtr.distort('disksavior:quantum_dots')
        .notConsumable('gtceu:neutronium_block')
        .circuit(1)
        .itemInputs('gtceu:selenium_dust', 'gtceu:cadmium_dust', '42x gtceu:carbon_dust', 'gtceu:phosphorus_dust')
        .inputFluids('gtceu:hydrogen 87000', 'gtceu:oxygen 2000')
        .outputFluids('gtceu:quantum_dots 1000')
        .EUt(GTValues.VA[GTValues.UHV])
        .duration(2000)
        .blastFurnaceTemp(800)
    //单步硝酸锕镭
    gtr.distort('disksavior:actinium_radium_nitrate_solution')
        .notConsumable('gtceu:orichalcum_block')
        .notConsumable('gtceu:blacklight')
        .circuit(1)
        .itemInputs(
            '32x gtceu:trinium_compound_dust',
            '12x gtceu:fine_carbon_nanotubes_wire',
            '2x gtceu:fullerene_dust'
        )
        .inputFluids('gtceu:nitric_acid 48000')
        .itemOutputs(
            '4x gtceu:francium_dust',
            '16x gtceu:astatine_dust',
            '16x gtceu:selenium_dust',
            '2x gtceu:protactinium_dust',
            'gtceu:radium_dust',
            '4x gtceu:naquadria_dust',
            '2x gtceu:enriched_naquadah_dust',
            '8x gtceu:actinium_dust',
            '24x gtceu:trinium_dust',
            'gtceu:thorium_dust'
        )
        .outputFluids(
            'gtceu:nitrogen 48000',
            'gtceu:oxygen 136000'
        )
        .EUt(GTValues.VA[GTValues.UHV])
        .duration(3000)
        .blastFurnaceTemp(800)
    //单步石化脱硫
    gtr.large_chemical_reactor('disksavior:oil_medium_sulfuric')
        .notConsumable('gtceu:desulfurizer')
        .inputFluids('gtceu:oil_medium 120000')
        .itemOutputs('27x gtceu:sulfur_dust')
        .outputFluids('gtceu:heavy_fuel 12000', 'gtceu:light_fuel 60000', 'gtceu:naphtha 180000', 'gtceu:refinery_gas 72000')
        .EUt(GTValues.VA[GTValues.HV])
        .duration(20 * 1200 / 4)
    gtr.large_chemical_reactor('disksavior:oil_heavy_sulfuric')
        .notConsumable('gtceu:desulfurizer')
        .inputFluids('gtceu:oil_heavy 120000')
        .itemOutputs('37x gtceu:sulfur_dust')
        .outputFluids('gtceu:heavy_fuel 300000', 'gtceu:light_fuel 54000', 'gtceu:naphtha 18000', 'gtceu:refinery_gas 72000')
        .EUt(GTValues.VA[GTValues.HV])
        .duration(20 * 800 / 4)
    gtr.large_chemical_reactor('disksavior:oil_light_sulfuric')
        .notConsumable('gtceu:desulfurizer')
        .inputFluids('gtceu:oil_light 180000')
        .itemOutputs('30x gtceu:sulfur_dust')
        .outputFluids('gtceu:heavy_fuel 12000', 'gtceu:light_fuel 24000', 'gtceu:naphtha 36000', 'gtceu:refinery_gas 288000')
        .EUt(GTValues.VA[GTValues.HV])
        .duration(20 * 1200 / 4)
    gtr.large_chemical_reactor('disksavior:oil_sulfuric')
        .notConsumable('gtceu:desulfurizer')
        .inputFluids('gtceu:oil 60000')
        .itemOutputs('15x gtceu:sulfur_dust')
        .outputFluids('gtceu:heavy_fuel 18000', 'gtceu:light_fuel 60000', 'gtceu:naphtha 24000', 'gtceu:refinery_gas 72000')
        .EUt(GTValues.VA[GTValues.HV])
        .duration(20 * 800 / 4)
    //粉直出单步铊
    gtr.distort('disksavior:easier_thallium_dust')
        .itemInputs('28x #minecraft:logs', '264x gtceu:grossular_dust', '6x gtceu:sulfur_dust', '3x gtceu:carbon_dust', '2x gtceu:potassium_dust')
        .inputFluids('gtceu:steam 28000', 'gtceu:naphtha 2800', 'gtceu:ethanol 2000')
        .notConsumable('gtceu:flotation_cell_regulator')
        .notConsumable('gtceu:vacuum_drying_furnace')
        .notConsumable('gtceu:isa_mill')
        .itemOutputs('4x gtceu:thallium_dust', '32x gtceu:calcium_dust', '32x gtceu:aluminium_dust', '16x gtceu:tungsten_dust')
        .EUt(GTValues.VA[GTValues.UV])
        .duration(1000)
        .blastFurnaceTemp(800)
    //单步环戊二烯化锎
    gtr.distort('disksavior:californium_cyclopentadienide_assemble')
        .notConsumable('gtceu:mithril_block')
        .itemInputs('gtceu:californium_dust', '15x gtceu:carbon_dust')
        .inputFluids('gtceu:hydrogen 15000')
        .outputFluids('gtceu:californium_cyclopentadienide 1000')
        .EUt(GTValues.VA[GTValues.UHV])
        .blastFurnaceTemp(800)
        .duration(2000)
    //蒸馏水离心出16种净化水
    gtr.centrifuge('disksavior:water_distillation_super')
        .circuit(1)
        .inputFluids('gtceu:distilled_water 18525400')
        .outputFluids(
            'gtceu:grade_16_purified_water 160000',
            'gtceu:grade_8_purified_water 1440000',
            'gtceu:grade_15_purified_water 320000',
            'gtceu:grade_14_purified_water 480000',
            'gtceu:grade_13_purified_water 640000',
            'gtceu:grade_12_purified_water 800000',
            'gtceu:grade_11_purified_water 960000',
            'gtceu:grade_10_purified_water 1120000',
            'gtceu:grade_9_purified_water 1280000',
            'gtceu:grade_7_purified_water 1600000',
            'gtceu:grade_6_purified_water 1760000',
            'gtceu:grade_5_purified_water 1920000',
            'gtceu:grade_4_purified_water 2080000',
            'gtceu:grade_3_purified_water 2240000',
            'gtceu:grade_2_purified_water 2400000',
            'gtceu:grade_1_purified_water 2560000'
        )
        .EUt(GTValues.VA[GTValues.UV])
        .duration(2000)
    //霜原碎片电解
    gtr.electrolyzer('disksavior:glacio_spirit')
        .notConsumable('ad_astra:glacio_stone')
        .itemOutputs('1024x kubejs:glacio_spirit')
        .EUt(GTValues.VA[GTValues.UV])
        .duration(2000)
    //单步稀土线
    gtr.large_chemical_reactor('disksavior:monazite_dust_processing')
        .itemInputs('144x gtceu:monazite_dust')
        .notConsumable('gtceu:magnetic_steel_rod')
        .circuit(30)
        .inputFluids(
            'minecraft:water 1600',
            'gtceu:phosphoric_acid 14400',
            'gtceu:hydrochloric_acid 8000'
        )
        .itemOutputs(
            'gtceu:lanthanum_dust',
            'gtceu:cerium_dust',
            'gtceu:neodymium_dust',
            'gtceu:samarium_dust',
            'gtceu:europium_dust',
            'gtceu:praseodymium_dust',
            'gtceu:gadolinium_dust',
            'gtceu:terbium_dust',
            'gtceu:dysprosium_dust',
            'gtceu:holmium_dust',
            'gtceu:erbium_dust',
            'gtceu:thulium_dust',
            'gtceu:ytterbium_dust',
            'gtceu:scandium_dust',
            'gtceu:lutetium_dust',
            'gtceu:yttrium_dust'
        )
        .outputFluids(
            'gtceu:oxygen 24000',
            'gtceu:helium 28800'
        )
        .EUt(GTValues.VA[GTValues.HV])
        .duration(2000)
    //粉直出单步铟
    gtr.large_chemical_reactor('disksavior:indium_dust_pattern')
        .circuit(5)
        .itemInputs('96x gtceu:aluminium_dust',)
        .inputFluids('gtceu:sulfuric_acid 112000')
        .itemOutputs(
            '7x gtceu:indium_dust',
            '24x gtceu:sulfur_dust',
        )
        .outputFluids('gtceu:oxygen 72000')
        .EUt(GTValues.VA[GTValues.IV])
        .duration(1400)
    //单步富勒烯
    gtr.distort('disksavior:fullerene_dust_pattern')
        .circuit(1)
        .notConsumable('gtceu:osmium_block')
        .itemInputs(
            '3780x gtceu:carbon_dust'
        )
        .inputFluids(
            'gtceu:methane 60000',
            'gtceu:nitrogen 700000'
        )
        .itemOutputs(
            '64x gtceu:fullerene_dust'
        )
        .outputFluids(
            'gtceu:hydrogen 60000',
            'gtceu:ammonia 640000'
        )
        .EUt(GTValues.VA[GTValues.UIV])
        .blastFurnaceTemp(800)
        .duration(1280)
    //单步硫酸铀
    gtr.electrolyzer('disksavior:uranium_sulfate_waste_solution')
        .itemInputs('gtceu:uraninite_dust')
        .inputFluids('gtceu:sulfuric_acid 9000')
        .itemOutputs(
            'gtceu:lead_dust',
            'gtceu:barium_dust',
            'gtceu:strontium_dust',
            'gtceu:radium_dust'
        )
        .outputFluids('gtceu:diluted_sulfuric_acid 9000')
        .EUt(GTValues.VA[GTValues.HV])
        .duration(4500)
    //单步精金
    gtr.distort('disksavior:adamantine_compounds_dust')
        .notConsumable('gtceu:mithril_block')
        .itemInputs(
            '32x gtceu:enriched_naquadah_dust',
            '9x gtceu:naquadah_dust',
            '8x gtceu:sulfur_dust',
            'gtceu:alunite_dust',
            '64x gtceu:potassium_ethylxanthate_dust',
            '140x #minecraft:logs'
        )
        .inputFluids(
            'minecraft:water 25',
            'gtceu:naphtha 14000',
            'gtceu:sulfuric_acid 2000',
            'gtceu:hydrogen 16000',
            'gtceu:nitration_mixture 6000',
            'gtceu:aqua_regia 12000',
            'gtceu:mana 600',
        )
        .itemOutputs(
            '6x gtceu:adamantine_dust',
            'gtceu:naquadria_dust'
        )
        .outputFluids(
            'gtceu:hydrochloric_acid 6000',
            'gtceu:nitrogen 6000',
            'gtceu:oxygen 8000',
        )
        .EUt(GTValues.VA[GTValues.UEV])
        .blastFurnaceTemp(800)
        .duration(2400)
    //单步硅岩燃料，不完美循环，我真的不想再配平了，递归循环是极为邪恶的
    //化反30电路
    gtr.large_chemical_reactor('disksavior:naquadah_fuel')
        .itemInputs('160x gtceu:naquadah_dust')
        .circuit(30)
        .inputFluids(
            'gtceu:ammonia 64000',
            'gtceu:nitric_acid 64000',
            'gtceu:fluorine 64000'
        )
        .outputFluids(
            'gtceu:naquadah_fuel 64000',
            'gtceu:enriched_naquadah_waste 8000'
        )
        .EUt(GTValues.VA[GTValues.UV])
        .duration(12800)
    //单步富集硅岩燃料，完美循环
    //化反30电路
    gtr.large_chemical_reactor('disksavior:enriched_naquadah_fuel')
        .circuit(30)
        .inputFluids(
            'minecraft:water 10800000',
            'gtceu:radon 432000',
            'gtceu:sulfuric_acid 7847000',
            'gtceu:naquadria_solution 4021650',
            'gtceu:hydrogen 398000'
        )
        .itemOutputs(
            '2700x gtceu:hot_trinium_ingot',
            '199x gtceu:hot_naquadria_ingot'
        )
        .outputFluids(
            'gtceu:enriched_naquadah_fuel 432000',
            'gtceu:fluorine 2794500'
        )
        .EUt(GTValues.VA[GTValues.UHV])
        .duration(86400)
    //九倍压缩核废料电解，一号电路
    gtr.electrolyzer('disksavior:nuclear_waste_9')
        .itemInputs('9x kubejs:nuclear_waste')
        .circuit(1)
        .itemOutputs(
            'gtceu:plutonium_dust',
            'gtceu:polonium_dust',
            'gtceu:uranium_dust',
            'gtceu:thorium_dust',
            'gtceu:protactinium_dust',
            'gtceu:neptunium_dust'
        )
        .EUt(2048)
        .duration(1800)
    //四倍压缩稀有金属粉离心
    //因为会串，所以改离心机做
    //因未知原因，用编程电路无法正常工作，故改用新物品
    gtr.centrifuge('disksavior:rec_4x')
        .notConsumable('gtceu:rare_earth_centrifugal')
        .itemInputs('4x gtceu:rare_earth_metal_dust')
        .itemOutputs(
            'gtceu:promethium_dust',
            'gtceu:lanthanum_dust',
            'gtceu:cerium_dust',
            'gtceu:neodymium_dust',
            'gtceu:samarium_dust',
            'gtceu:europium_dust',
            'gtceu:praseodymium_dust',
            'gtceu:gadolinium_dust',
            'gtceu:terbium_dust',
            'gtceu:dysprosium_dust',
            'gtceu:holmium_dust',
            'gtceu:erbium_dust',
            'gtceu:thulium_dust',
            'gtceu:ytterbium_dust',
            'gtceu:scandium_dust',
            'gtceu:lutetium_dust',
            'gtceu:yttrium_dust'
        )
        .EUt(GTValues.VA[GTValues.UV])
        .duration(800)
    /*我写完了才发现爆破的比我的效率高，已哭泣
    //渔场集大成去概率
    gtr.packer('disksavior:packer_super')
        .notConsumable('64x gtceu:fishing_ground')
        .circuit(30)
        .itemOutputs('459000x minecraft:cod',
        '191700x minecraft:salmon',
        '15300x minecraft:tropical_fish',
        '99900x minecraft:pufferfish',
        '7200x minecraft:experience_bottle',
        '7200x minecraft:name_tag',
        '7200x minecraft:nautilus_shell',
        '7200x minecraft:saddle',
        '15300x minecraft:lily_pad',
        '9000x minecraft:leather',
        '9000x minecraft:rotten_flesh',
        '4500x minecraft:stick',
        '4500x minecraft:string',
        '9000x minecraft:bone',
        '50x gtceu:damascus_steel_ingot',
        '900x minecraft:ink_sac',
        '9000x minecraft:tripwire_hook',
        '216x gtceu:ancient_gold_coin',
        '17avaritia:neutron_pile',
        '108x kubejs:zero_point_module_fragments',
        'minecraft:heart_of_the_sea')
        .EUt(GTValues.VA[GTValues.EV])
        .duration(200*8192)*/
    const wood_distillation_super = [
        'gtceu:naphthalene 1640',
        'gtceu:methyl_acetate 16',
        'gtceu:ethanol 16',
        'gtceu:ethylene 20',
        'gtceu:toluene 75',
        'gtceu:acetone 80',
        'gtceu:methane 130',
        'gtceu:acetic_acid 160',
        'gtceu:dimethylbenzene 240',
        'gtceu:benzene 350',
        'gtceu:phenol 485',
        'gtceu:ethylbenzene 2000',
        'gtceu:ammonia 2400',
        'gtceu:methanol 480',
        'gtceu:carbon 490',
        'gtceu:creosote 1120',
        'gtceu:carbon_dioxide 2000',
        'gtceu:hydrogen_sulfide 300',
        'gtceu:carbon_monoxide 340',
        'gtceu:hydrogen 20',
        'minecraft:water 800'
    ]
    //木化集大成
    gtr.wood_distillation('disksavior:wood_distillation_super')
        .inputFluids('minecraft:lava 16000')//为什么是岩浆啊喂
        .outputFluids(wood_distillation_super)
        .itemOutputs(
            '8x gtceu:coke_dust',
            '8x gtceu:dark_ash_dust'
        )
        .EUt(GTValues.VA[GTValues.MV])
        .duration(400)
    //木化集大成下调蒸馏塔
    gtr.distillation_tower('disksavior:wood_distillation_super')
        .inputFluids('minecraft:lava 16000')
        .outputFluids(wood_distillation_super)
        .itemOutputs(
            '8x gtceu:coke_dust',
            '8x gtceu:dark_ash_dust'
        )
        .EUt(GTValues.VA[GTValues.MV])
        .duration(800)
    //石化工厂配方可用化反运行
    gtr.chemical_reactor('disksavior:petrochemical_plant_1')
        .circuit(1)
        .inputFluids('gtceu:oil 1000', 'gtceu:steam 1000')
        .outputFluids('gtceu:toluene 60',
            'gtceu:benzene 180',
            'gtceu:octane 60',
            'gtceu:butane 80',
            'gtceu:butene 100',
            'gtceu:butadiene 90',
            'gtceu:propane 80',
            'gtceu:propene 400',
            'gtceu:ethane 80',
            'gtceu:ethylene 400',
            'gtceu:methane 400',
            'gtceu:helium 20')
        .EUt(GTValues.VA[GTValues.EV])
        .duration(200)
    gtr.chemical_reactor('disksavior:petrochemical_plant_2')
        .circuit(1)
        .inputFluids('gtceu:oil_medium 1000', 'gtceu:steam 1000')
        .outputFluids('gtceu:toluene 40',
            'gtceu:benzene 200',
            'gtceu:octane 30',
            'gtceu:butane 70',
            'gtceu:butene 100',
            'gtceu:butadiene 100',
            'gtceu:propane 30',
            'gtceu:propene 600',
            'gtceu:ethane 130',
            'gtceu:ethylene 1000',
            'gtceu:methane 1000',
            'gtceu:helium 10')
        .EUt(GTValues.VA[GTValues.EV])
        .duration(200)
    gtr.chemical_reactor('disksavior:petrochemical_plant_3')
        .circuit(1)
        .inputFluids('gtceu:oil_heavy 1000', 'gtceu:steam 1000')
        .outputFluids('gtceu:toluene 240',
            'gtceu:benzene 1200',
            'gtceu:octane 20',
            'gtceu:butane 60',
            'gtceu:butene 240',
            'gtceu:butadiene 150',
            'gtceu:propane 30',
            'gtceu:propene 300',
            'gtceu:ethane 45',
            'gtceu:ethylene 450',
            'gtceu:methane 450',
            'gtceu:helium 10')
        .EUt(GTValues.VA[GTValues.EV])
        .duration(200)
    gtr.chemical_reactor('disksavior:petrochemical_plant_4')
        .circuit(1)
        .inputFluids('gtceu:oil_light 1000', 'gtceu:steam 1000')
        .outputFluids('gtceu:toluene 20',
            'gtceu:benzene 100',
            'gtceu:octane 20',
            'gtceu:butane 120',
            'gtceu:butene 80',
            'gtceu:butadiene 80',
            'gtceu:propane 140',
            'gtceu:propene 90',
            'gtceu:ethane 200',
            'gtceu:ethylene 250',
            'gtceu:methane 2000',
            'gtceu:helium 40')
        .EUt(GTValues.VA[GTValues.EV])
        .duration(200)
    //搅拌机科技
    //搅拌机合木化工厂，加点胶水粘起来就行了真是神奇啊
    gtr.mixer('disksavior:wood_distillation')
        .itemInputs(
            '64x gtceu:distillation_tower',
            '32x gtceu:pyrolyse_oven'
        )
        .inputFluids('gtceu:glue 185254')
        .itemOutputs('gtceu:wood_distillation')
        .EUt(GTValues.VA[GTValues.HV])
        .duration(200)
    //搅拌机合石化工厂
    gtr.mixer('disksavior:petrochemical_plant')
        .itemInputs(
            '128x gtceu:distillation_tower',
            '64x gtceu:cracker',
            '16x gtceu:large_chemical_reactor'
        )
        .inputFluids('gtceu:glue 185254')
        .itemOutputs('gtceu:petrochemical_plant')
        .EUt(GTValues.VA[GTValues.HV])
        .duration(200)
    //大集气加强
    //100*16*40*100*16=102.4MB
    //基数(B)*催化剂修正值（HV~IV）*升阶补偿（一次无损超频*十倍速=40）*百倍批处理*两次无损超频
    //空气
    gtr.large_gas_collector('disksavior:7')
        .notConsumable('kubejs:overworld_data')
        .notConsumable('gtceu:cold_ice_freezer')
        .outputFluids('gtceu:liquid_air 102400000000', 'gtceu:air 4096000000000')
        .EUt(GTValues.VA[GTValues.IV])
        .duration(20000)
    //下界空气
    gtr.large_gas_collector('disksavior:8')
        .notConsumable('kubejs:nether_data')
        .notConsumable('gtceu:cold_ice_freezer')
        .outputFluids('gtceu:liquid_nether_air 102400000000', 'gtceu:nether_air 4096000000000')
        .EUt(GTValues.VA[GTValues.LuV])
        .duration(20000)
    //末地空气
    gtr.large_gas_collector('disksavior:9')
        .notConsumable('kubejs:end_data')
        .notConsumable('gtceu:cold_ice_freezer')
        .outputFluids('gtceu:liquid_ender_air 102400000000', 'gtceu:ender_air 4096000000000')
        .EUt(GTValues.VA[GTValues.ZPM])
        .duration(20000)
    //巴纳德C空气
    gtr.large_gas_collector('disksavior:10')
        .notConsumable('kubejs:barnarda_log')
        .outputFluids('gtceu:barnarda_air 1000000')
        .EUt(GTValues.VA[GTValues.IV])
        .duration(2000)
    //矿粉还原矿处中间产物
    //闪电处理32号电路
    //晶质铀
    gtr.lightning_processor('disksavior:old_1')
        .circuit(32)
        .itemInputs('2x gtceu:uraninite_dust')
        .itemOutputs('gtceu:impure_uraninite_dust')
        .EUt(GTValues.VA[GTValues.ULV])
        .duration(20)
    //黝铜
    gtr.lightning_processor('disksavior:old_2')
        .circuit(32)
        .itemInputs('2x gtceu:tetrahedrite_dust')
        .itemOutputs('gtceu:purified_tetrahedrite_ore')
        .EUt(GTValues.VA[GTValues.ULV])
        .duration(20)
    //斑铜
    gtr.lightning_processor('disksavior:old_3')
        .circuit(32)
        .itemInputs('2x gtceu:bornite_dust')
        .itemOutputs('gtceu:purified_bornite_ore')
        .EUt(GTValues.VA[GTValues.ULV])
        .duration(20)
    //辉铜
    gtr.lightning_processor('disksavior:old_4')
        .circuit(32)
        .itemInputs('2x gtceu:chalcocite_dust')
        .itemOutputs('gtceu:purified_chalcocite_ore')
        .EUt(GTValues.VA[GTValues.ULV])
        .duration(20)
    //谢尔顿
    gtr.lightning_processor('disksavior:old_5')
        .circuit(32)
        .itemInputs('2x gtceu:cooperite_dust')
        .itemOutputs('gtceu:purified_cooperite_ore')
        .EUt(GTValues.VA[GTValues.ULV])
        .duration(20)
    //粉直出铂系矿泥
    //黝铜
    gtr.chemical_reactor('disksavior:boxi_1')
        .itemInputs('gtceu:tetrahedrite_dust')
        .inputFluids('gtceu:nitric_acid 100')
        .itemOutputs('8x gtceu:platinum_group_sludge_dust', 'gtceu:copper_dust')
        .outputFluids('gtceu:oxygen 1000', 'gtceu:sulfuric_acid 1000')
        .EUt(GTValues.VA[GTValues.LV])
        .duration(50)
    //斑铜
    gtr.chemical_reactor('disksavior:boxi_2')
        .itemInputs('gtceu:bornite_dust')
        .inputFluids('gtceu:nitric_acid 100')
        .itemOutputs('8x gtceu:platinum_group_sludge_dust', 'gtceu:copper_dust')
        .outputFluids('gtceu:oxygen 1000', 'gtceu:sulfuric_acid 1000')
        .EUt(GTValues.VA[GTValues.LV])
        .duration(50)
    //辉铜
    gtr.chemical_reactor('disksavior:boxi_3')
        .itemInputs('gtceu:chalcocite_dust')
        .inputFluids('gtceu:nitric_acid 100')
        .itemOutputs('8x gtceu:platinum_group_sludge_dust', 'gtceu:copper_dust')
        .outputFluids('gtceu:oxygen 1000', 'gtceu:sulfuric_acid 1000')
        .EUt(GTValues.VA[GTValues.LV])
        .duration(50)
    //谢尔顿
    gtr.chemical_reactor('disksavior:boxi_4')
        .itemInputs('gtceu:cooperite_dust')
        .inputFluids('gtceu:nitric_acid 100')
        .itemOutputs('16x gtceu:platinum_group_sludge_dust', 'gtceu:nickel_dust')
        .outputFluids('gtceu:oxygen 1000', 'gtceu:sulfuric_acid 1000')
        .EUt(GTValues.VA[GTValues.LV])
        .duration(50)
    //一些去除维度限制的配方
    //大马士革钢
    gtr.chemical_bath('disksavior:fd_dsd')
        .itemInputs('gtceu:steel_dust')
        .inputFluids('gtceu:steam 100')
        .itemOutputs('gtceu:damascus_steel_dust')
        .EUt(GTValues.VA[GTValues.MV])
        .duration(200)
    //主世界数据
    gtr.world_data_scanner('disksavior:fd_o')
        .itemInputs(
            'gtceu:data_stick',
            '64x gtceu:stone_dust'
        )
        .circuit(2)
        .inputFluids(
            'gtceu:pcb_coolant 100',
            'gtceu:air 64000'
        )
        .itemOutputs('kubejs:overworld_data')
        .EUt(GTValues.VA[GTValues.LV])
        .duration(20)
    //下界数据
    gtr.world_data_scanner('disksavior:fd_n')
        .itemInputs(
            '2x gtceu:data_stick',
            '64x gtceu:netherrack_dust'
        )
        .circuit(2)
        .inputFluids(
            'gtceu:pcb_coolant 100',
            'gtceu:nether_air 64000'
        )
        .itemOutputs('2x kubejs:nether_data')
        .EUt(GTValues.VA[GTValues.MV])
        .duration(20)
    //末地数据
    gtr.world_data_scanner('disksavior:fd_e')
        .itemInputs(
            '4x gtceu:data_stick',
            '64x gtceu:endstone_dust'
        )
        .circuit(2)
        .inputFluids(
            'gtceu:pcb_coolant 100',
            'gtceu:ender_air 64000'
        )
        .itemOutputs('4x kubejs:end_data')
        .EUt(GTValues.VA[GTValues.HV])
        .duration(20)
})