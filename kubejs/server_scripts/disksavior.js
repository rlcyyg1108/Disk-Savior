ServerEvents.recipes(event => {
    const gtr = event.recipes.gtceu
    //原始虚空矿机用水
    gtr.primitive_void_ore('disksavior:water')
        .inputFluids('minecraft:water 1')
        .duration(200)
    //灵魂沙
    gtr.mix('disksavior:soul_sand')
        .itemInputs('minecraft:sand')
        .inputFluids('minecraft:lava 100')
        .itemOutputs('disksavior:soul_sand')
        .EUt(GTValues.VA[GTValues.ULV])
        .duration(10)
    //蒸汽产出
    gtr.fluid_heater('disksavior:steam_is_my_last_life')
        .circuit(2)
        .inputFluids('minecraft:water 2147483648')
        .outputFluids('gtceu:steam 343597383680')
        .EUt(GTValues.VA[GTValues.ULV])
        .duration(2987)
    //蒸汽发电加强
    gtr.steam_turbine('disksavior:steam_is_my_last_life')
        .notConsumable('disksavior:steam_is_my_last_life')
        .inputFluids('gtceu:steam 24665456015048704')
        .outputFluids('gtceu:distilled_water 57646075230342348')
        .EUt(-2147483648 * 2147483648)
        .duration(2987)
    //极高密度量子色动力学爆弹
    gtr.compressor('disksavior:quantum_chromodynamic_charge_super')
        .itemInputs('16384x kubejs:quantum_chromodynamic_charge')
        .itemOutputs('disksavior:quantum_chromodynamic_charge_super')
        .EUt(GTValues.VA[GTValues.OpV])
        .duration(185254)
    //蒸汽是我最后的生命……
    gtr.chemical_reactor('disksavior:steam_is_my_last_life')
        .circuit(15)
        .inputFluids('gtceu:steam 18520504000000')
        .itemOutputs('disksavior:steam_is_my_last_life')
        .EUt(1)
        .duration(370410080)
    //创造计算机下调到IV
    gtr.assembler('disksavior:creative_computation_provider')
        .itemInputs(
            '1024x gtceu:high_performance_computation_array',
            '4096x gtceu:hpca_computation_component',
            '4096x gtceu:hpca_active_cooler_component',
            '1024x gtceu:hpca_bridge_component',
            '64x gtceu:network_switch',
            '1024x gtceu:cold_ice_freezer',
            '2147483647x minecraft:ice',
            '21x minecraft:packed_ice',
            '18520504x minecraft:blue_ice'
        )
        .inputFluids('gtceu:glue 94928896')
        .itemOutputs('gtceu:creative_computation_provider')
        .EUt(GTValues.VA[GTValues.LuV])
        .duration(185254)
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
        .inputFluids('gtceu:glue 94928896')
        .itemOutputs('gtceu:creative_data_access_hatch')
        .EUt(GTValues.VA[GTValues.LuV])
        .duration(185254)
    //可配置重力绝对洁净维护仓下调LV
    gtr.assembler('disksavior:law_cleaning_gravity_configuration_maintenance_hatch')
        .itemInputs('131072x gtceu:maintenance_hatch')
        .inputFluids('gtceu:glue 18520504')
        .itemOutputs('gtceu:law_cleaning_gravity_configuration_maintenance_hatch')
        .EUt(GTValues.VA[GTValues.ULV])
        .duration(2897)
    //粉直出单步铟
    gtr.chemical_reactor('rlcyyg:indium_dust_pattern')
        .circuit(5)
        .itemInputs(
            '96x gtceu:aluminium_dust',
            '28x gtceu:galena_dust',
            '28x gtceu:sphalerite_dust'
        )
        .inputFluids(
            'gtceu:sulfuric_acid 112000'
        )
        .itemOutputs(
            '7x gtceu:indium_dust',
            '108x gtceu:sulfur_dust',
            '28x gtceu:lead_dust',
            '28x gtceu:silver_dust',
            '28x gtceu:zinc_dust'
        )
        .outputFluids(
            'minecraft:water 28000',
            'gtceu:oxygen 72000'
        )
        .EUt(GTValues.VA[GTValues.IV])
        .duration(1400)
    //单步富勒烯
    gtr.distort('disksavior:fullerene_dust_pattern')
        .notConsumable('gtceu:osmium_block')
        .itemInputs(
            '3780x gtceu:carbon_dust'
        )
        .inputFluids(
            'gtceu:methane 60000',
            'gtceu:bromine 60000',
            'gtceu:nitrogen 700000'
        )
        .itemOutputs(
            '64x gtceu:fullerene_dust'
        )
        .outputFluids(
            'gtceu:bromine 60000',
            'gtceu:hydrogen 60000',
            'gtceu:ammonia 640000'
        )
        .EUt(GTValues.VA[GTValues.UEV])
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
            '33x gtceu:enriched_naquadah_dust',
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
            'gtceu:hot_enriched_naquadah_ingot',
            'gtceu:hot_naquadria_ingot'
        )
        .outputFluids(
            'gtceu:hydrochloric_acid 6000',
            'gtceu:nitrogen 6000',
            'gtceu:oxygen 8000',
        )
        .EUt(GTValues.VA[GTValues.UEV])
        .blastFurnaceTemp(800)
        .duration(100)
    //单步硅岩燃料，不完美循环，我真的不想再配平了，递归循环是极为邪恶的
    //化反30电路
    gtr.chemical_reactor('disksavior:naquadah_fuel')
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
    gtr.chemical_reactor('disksavior:enriched_naquadah_fuel')
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
    //九倍压缩核废料离心，一号电路
    gtr.centrifuge('disksavior:nuclear_waste_9')
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
    //四倍压缩稀有金属粉离心，一号电路
    //虽然jei里显示不下，但是实际上是可以正常工作的
    gtr.rare_earth_centrifugal('disksavior:rec_remember_circuit_1')
        .itemInputs('4x gtceu:rare_earth_metal_dust')
        .circuit(1)
        .itemOutputs(
            'gtceu:lanthanum_dust',
            'gtceu:cerium_dust',
            'gtceu:neodymium_dust',
            'gtceu:promethium_dust',
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
        .duration(185254)
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
        .duration(185254)
    //大集气加强
    //空气
    gtr.large_gas_collector('disksavior:7')
        .notConsumable('kubejs:overworld_data')
        .notConsumable('gtceu:cold_ice_freezer')
        .outputFluids('gtceu:liquid_air 64000000')
        .EUt(GTValues.VA[GTValues.IV])
        .duration(2000)
    //下界空气
    gtr.large_gas_collector('disksavior:8')
        .notConsumable('kubejs:nether_data')
        .notConsumable('gtceu:cold_ice_freezer')
        .outputFluids('gtceu:liquid_nether_air 64000000')
        .EUt(GTValues.VA[GTValues.LuV])
        .duration(2000)
    //末地空气
    gtr.large_gas_collector('disksavior:9')
        .notConsumable('kubejs:end_data')
        .notConsumable('gtceu:cold_ice_freezer')
        .outputFluids('gtceu:liquid_ender_air 64000000')
        .EUt(GTValues.VA[GTValues.ZPM])
        .duration(2000)
    //巴纳德C空气
    gtr.large_gas_collector('disksavior:10')
        .notConsumable('kubejs:barnarda_log')
        .outputFluids('gtceu:barnarda_air 100000')
        .EUt(GTValues.VA[GTValues.IV])
        .duration(200)
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
        .itemOutputs('8x gtceu:platinum_group_sludge_dust')
        .outputFluids('gtceu:sulfuric_copper_solution 1000')
        .EUt(GTValues.VA[GTValues.LV])
        .duration(50)
    //斑铜
    gtr.chemical_reactor('disksavior:boxi_2')
        .itemInputs('gtceu:bornite_dust')
        .inputFluids('gtceu:nitric_acid 100')
        .itemOutputs('8x gtceu:platinum_group_sludge_dust')
        .outputFluids('gtceu:sulfuric_copper_solution 1000')
        .EUt(GTValues.VA[GTValues.LV])
        .duration(50)
    //辉铜
    gtr.chemical_reactor('disksavior:boxi_3')
        .itemInputs('gtceu:chalcocite_dust')
        .inputFluids('gtceu:nitric_acid 100')
        .itemOutputs('8x gtceu:platinum_group_sludge_dust')
        .outputFluids('gtceu:sulfuric_copper_solution 1000')
        .EUt(GTValues.VA[GTValues.LV])
        .duration(50)
    //谢尔顿
    gtr.chemical_reactor('disksavior:boxi_4')
        .itemInputs('gtceu:cooperite_dust')
        .inputFluids('gtceu:nitric_acid 100')
        .itemOutputs('16x gtceu:platinum_group_sludge_dust')
        .outputFluids('gtceu:sulfuric_nickel_solution 1000')
        .EUt(GTValues.VA[GTValues.LV])
        .duration(50)
    //一些去除维度限制的配方
    //大马士革钢
    gtr.chemical_bath('disksavior:fd_dsd')
        .itemInputs('gtceu:steel_dust')
        .inputFluids('gtceu:lubricant 100')
        .itemOutputs('gtceu:damascus_steel_dust')
        .EUt(GTValues.VA[GTValues.LV])
        .duration(200)
    //主世界数据
    gtr.world_data_scanner('disksavior:fd_o')
        .itemInputs(
            '64x gtceu:stone_dust',
            'gtceu:data_stick'
        )
        .circuit(2)
        .inputFluids(
            'gtceu:pcb_coolant 100',
            'gtceu:air 64000'
        )
        .itemOutputs('kubejs:overworld_data')
        .EUt(GTValues.VA[GTValues.ULV])
        .duration(20)
    //下界数据
    gtr.world_data_scanner('disksavior:fd_n')
        .itemInputs(
            '64x gtceu:netherrack_dust',
            '2x gtceu:data_stick'
        )
        .circuit(2)
        .inputFluids(
            'gtceu:pcb_coolant 100',
            'gtceu:nether_air 64000'
        )
        .itemOutputs('2x kubejs:nether_data')
        .EUt(GTValues.VA[GTValues.ULV])
        .duration(20)
    //末地数据
    gtr.world_data_scanner('disksavior:fd_e')
        .itemInputs(
            '64x gtceu:endstone_dust',
            '4x gtceu:data_stick'
        )
        .circuit(2)
        .inputFluids(
            'gtceu:pcb_coolant 100',
            'gtceu:ender_air 64000'
        )
        .itemOutputs('4x kubejs:end_data')
        .EUt(GTValues.VA[GTValues.ULV])
        .duration(20)
    //流体钻机电解
    //————————————————————————————————————————————————————————————————————————————————mv
    //主世界
    gtr.electrolyzer('disksavior:mv_t0')
        .notConsumable('1024x gtceu:mv_fluid_drilling_rig')
        .notConsumable('minecraft:dirt')
        .outputFluids(
            'gtceu:salt_water 614400',
            'gtceu:natural_gas 230400',
            'gtceu:oil_medium 307200',
            'gtceu:oil_light 384000',
            'gtceu:oil_heavy 230400',
            'gtceu:oil 307200'
        )
        .EUt(GTValues.VA[GTValues.HV])
        .duration(200)
    //月球
    gtr.electrolyzer('disksavior:mv_t1')
        .notConsumable('1024x gtceu:mv_fluid_drilling_rig')
        .notConsumable('ad_astra:moon_stone')
        .outputFluids(
            'gtceu:helium_3 153600',
            'gtceu:helium 307200'
        )
        .EUt(GTValues.VA[GTValues.HV])
        .duration(200)
    //火星
    gtr.electrolyzer('disksavior:mv_t2')
        .notConsumable('1024x gtceu:mv_fluid_drilling_rig')
        .notConsumable('ad_astra:mars_stone')
        .outputFluids(
            'gtceu:radon 307200'
        )
        .EUt(GTValues.VA[GTValues.HV])
        .duration(200)
    //金星
    gtr.electrolyzer('disksavior:mv_t3_1')
        .notConsumable('1024x gtceu:mv_fluid_drilling_rig')
        .notConsumable('ad_astra:venus_stone')
        .outputFluids(
            'gtceu:sulfuric_acid 307200'
        )
        .EUt(GTValues.VA[GTValues.HV])
        .duration(200)
    //水星
    gtr.electrolyzer('disksavior:mv_t3_2')
        .notConsumable('1024x gtceu:mv_fluid_drilling_rig')
        .notConsumable('ad_astra:mercury_stone')
        .outputFluids(
            'gtceu:deuterium 230400'
        )
        .EUt(GTValues.VA[GTValues.HV])
        .duration(200)
    //下界
    gtr.electrolyzer('disksavior:mv_t3_3')
        .notConsumable('1024x gtceu:mv_fluid_drilling_rig')
        .notConsumable('minecraft:netherrack')
        .outputFluids(
            'minecraft:lava 998400',
            'gtceu:natural_gas 537600'
        )
        .EUt(GTValues.VA[GTValues.HV])
        .duration(200)
    //谷神星
    gtr.electrolyzer('disksavior:mv_t4')
        .notConsumable('1024x gtceu:mv_fluid_drilling_rig')
        .notConsumable('kubejs:ceresstone')
        .outputFluids(
            'gtceu:neon 307200',
            'gtceu:radon 230400',
            'gtceu:xenon 307200',
            'gtceu:krypton 307200'
        )
        .EUt(GTValues.VA[GTValues.HV])
        .duration(200)
    //木卫一
    gtr.electrolyzer('disksavior:mv_t5_1')
        .notConsumable('1024x gtceu:mv_fluid_drilling_rig')
        .notConsumable('kubejs:iostone')
        .outputFluids(
            'gtceu:coal_gas 307200'
        )
        .EUt(GTValues.VA[GTValues.HV])
        .duration(200)
    //木卫三
    gtr.electrolyzer('disksavior:mv_t5_2')
        .notConsumable('1024x gtceu:mv_fluid_drilling_rig')
        .notConsumable('kubejs:ganymedestone')
        .outputFluids(
            'gtceu:hydrochloric_acid 307200'
        )
        .EUt(GTValues.VA[GTValues.HV])
        .duration(200)
    //冥王星
    gtr.electrolyzer('disksavior:mv_t6_1')
        .notConsumable('1024x gtceu:mv_fluid_drilling_rig')
        .notConsumable('kubejs:plutostone')
        .outputFluids(
            'gtceu:nitric_acid 307200'
        )
        .EUt(GTValues.VA[GTValues.HV])
        .duration(200)
    //土卫二
    gtr.electrolyzer('disksavior:mv_t6_2')
        .notConsumable('1024x gtceu:mv_fluid_drilling_rig')
        .notConsumable('kubejs:enceladusstone')
        .outputFluids(
            'gtceu:chlorine 307200',
            'gtceu:fluorine 153600'
        )
        .EUt(GTValues.VA[GTValues.HV])
        .duration(200)
    //土卫六
    gtr.electrolyzer('disksavior:mv_t6_3')
        .notConsumable('1024x gtceu:mv_fluid_drilling_rig')
        .notConsumable('kubejs:titanstone')
        .outputFluids(
            'gtceu:methane 307200',
            'gtceu:benzene 230400',
            'gtceu:charcoal_byproducts 153600'
        )
        .EUt(GTValues.VA[GTValues.HV])
        .duration(200)
    //巴纳德C
    gtr.electrolyzer('disksavior:mv_t8')
        .notConsumable('1024x gtceu:mv_fluid_drilling_rig')
        .notConsumable('kubejs:barnarda_log')
        .outputFluids(
            'gtceu:unknowwater 307200'
        )
        .EUt(GTValues.VA[GTValues.HV])
        .duration(200)
    //————————————————————————————————————————————————————————————————————————————————hv
    //主世界
    gtr.electrolyzer('disksavior:hv_t0')
        .notConsumable('1024x gtceu:hv_fluid_drilling_rig')
        .notConsumable('minecraft:dirt')
        .outputFluids(
            'gtceu:salt_water 9830400',
            'gtceu:natural_gas 3686400',
            'gtceu:oil_medium 4915200',
            'gtceu:oil_light 6144000',
            'gtceu:oil_heavy 3686400',
            'gtceu:oil 4915200'
        )
        .EUt(GTValues.VA[GTValues.EV])
        .duration(200)
    //月球
    gtr.electrolyzer('disksavior:hv_t1')
        .notConsumable('1024x gtceu:hv_fluid_drilling_rig')
        .notConsumable('ad_astra:moon_stone')
        .outputFluids(
            'gtceu:helium_3 2457600',
            'gtceu:helium 4915200'
        )
        .EUt(GTValues.VA[GTValues.EV])
        .duration(200)
    //火星
    gtr.electrolyzer('disksavior:hv_t2')
        .notConsumable('1024x gtceu:hv_fluid_drilling_rig')
        .notConsumable('ad_astra:mars_stone')
        .outputFluids(
            'gtceu:radon 4915200'
        )
        .EUt(GTValues.VA[GTValues.EV])
        .duration(200)
    //金星
    gtr.electrolyzer('disksavior:hv_t3_1')
        .notConsumable('1024x gtceu:hv_fluid_drilling_rig')
        .notConsumable('ad_astra:venus_stone')
        .outputFluids(
            'gtceu:sulfuric_acid 4915200'
        )
        .EUt(GTValues.VA[GTValues.EV])
        .duration(200)
    //水星
    gtr.electrolyzer('disksavior:hv_t3_2')
        .notConsumable('1024x gtceu:hv_fluid_drilling_rig')
        .notConsumable('ad_astra:mercury_stone')
        .outputFluids(
            'gtceu:deuterium 3686400'
        )
        .EUt(GTValues.VA[GTValues.EV])
        .duration(200)
    //下界
    gtr.electrolyzer('disksavior:hv_t3_3')
        .notConsumable('1024x gtceu:hv_fluid_drilling_rig')
        .notConsumable('minecraft:netherrack')
        .outputFluids(
            'minecraft:lava 15974400',
            'gtceu:natural_gas 8601600'
        )
        .EUt(GTValues.VA[GTValues.EV])
        .duration(200)
    //谷神星
    gtr.electrolyzer('disksavior:hv_t4')
        .notConsumable('1024x gtceu:hv_fluid_drilling_rig')
        .notConsumable('kubejs:ceresstone')
        .outputFluids(
            'gtceu:neon 4915200',
            'gtceu:radon 3686400',
            'gtceu:xenon 4915200',
            'gtceu:krypton 4915200'
        )
        .EUt(GTValues.VA[GTValues.EV])
        .duration(200)
    //木卫一
    gtr.electrolyzer('disksavior:hv_t5_1')
        .notConsumable('1024x gtceu:hv_fluid_drilling_rig')
        .notConsumable('kubejs:iostone')
        .outputFluids(
            'gtceu:coal_gas 4915200'
        )
        .EUt(GTValues.VA[GTValues.EV])
        .duration(200)
    //木卫三
    gtr.electrolyzer('disksavior:hv_t5_2')
        .notConsumable('1024x gtceu:hv_fluid_drilling_rig')
        .notConsumable('kubejs:ganymedestone')
        .outputFluids(
            'gtceu:hydrochloric_acid 4915200'
        )
        .EUt(GTValues.VA[GTValues.EV])
        .duration(200)
    //冥王星
    gtr.electrolyzer('disksavior:hv_t6_1')
        .notConsumable('1024x gtceu:hv_fluid_drilling_rig')
        .notConsumable('kubejs:plutostone')
        .outputFluids(
            'gtceu:nitric_acid 4915200'
        )
        .EUt(GTValues.VA[GTValues.EV])
        .duration(200)
    //土卫二
    gtr.electrolyzer('disksavior:hv_t6_2')
        .notConsumable('1024x gtceu:hv_fluid_drilling_rig')
        .notConsumable('kubejs:enceladusstone')
        .outputFluids(
            'gtceu:chlorine 4915200',
            'gtceu:fluorine 2457600'
        )
        .EUt(GTValues.VA[GTValues.EV])
        .duration(200)
    //土卫六
    gtr.electrolyzer('disksavior:hv_t6_3')
        .notConsumable('1024x gtceu:hv_fluid_drilling_rig')
        .notConsumable('kubejs:titanstone')
        .outputFluids(
            'gtceu:methane 4915200',
            'gtceu:benzene 3686400',
            'gtceu:charcoal_byproducts 2457600'
        )
        .EUt(GTValues.VA[GTValues.EV])
        .duration(200)
    //巴纳德C
    gtr.electrolyzer('disksavior:hv_t8')
        .notConsumable('1024x gtceu:hv_fluid_drilling_rig')
        .notConsumable('kubejs:barnarda_log')
        .outputFluids(
            'gtceu:unknowwater 4915200'
        )
        .EUt(GTValues.VA[GTValues.EV])
        .duration(200)
    //————————————————————————————————————————————————————————————————————————————————ev
    //主世界
    gtr.electrolyzer('disksavior:ev_t0')
        .notConsumable('1024x gtceu:ev_fluid_drilling_rig')
        .notConsumable('minecraft:dirt')
        .outputFluids(
            'gtceu:salt_water 39321600',
            'gtceu:natural_gas 14745600',
            'gtceu:oil_medium 19660800',
            'gtceu:oil_light 24576000',
            'gtceu:oil_heavy 14745600',
            'gtceu:oil 19660800'
        )
        .EUt(GTValues.VA[GTValues.IV])
        .duration(200)
    //月球
    gtr.electrolyzer('disksavior:ev_t1')
        .notConsumable('1024x gtceu:ev_fluid_drilling_rig')
        .notConsumable('ad_astra:moon_stone')
        .outputFluids(
            'gtceu:helium_3 9830400',
            'gtceu:helium 19660800'
        )
        .EUt(GTValues.VA[GTValues.IV])
        .duration(200)
    //火星
    gtr.electrolyzer('disksavior:ev_t2')
        .notConsumable('1024x gtceu:ev_fluid_drilling_rig')
        .notConsumable('ad_astra:mars_stone')
        .outputFluids(
            'gtceu:radon 19660800'
        )
        .EUt(GTValues.VA[GTValues.IV])
        .duration(200)
    //金星
    gtr.electrolyzer('disksavior:ev_t3_1')
        .notConsumable('1024x gtceu:ev_fluid_drilling_rig')
        .notConsumable('ad_astra:venus_stone')
        .outputFluids(
            'gtceu:sulfuric_acid 19660800'
        )
        .EUt(GTValues.VA[GTValues.IV])
        .duration(200)
    //水星
    gtr.electrolyzer('disksavior:ev_t3_2')
        .notConsumable('1024x gtceu:ev_fluid_drilling_rig')
        .notConsumable('ad_astra:mercury_stone')
        .outputFluids(
            'gtceu:deuterium 14745600'
        )
        .EUt(GTValues.VA[GTValues.IV])
        .duration(200)
    //下界
    gtr.electrolyzer('disksavior:ev_t3_3')
        .notConsumable('1024x gtceu:ev_fluid_drilling_rig')
        .notConsumable('minecraft:netherrack')
        .outputFluids(
            'minecraft:lava 63897600',
            'gtceu:natural_gas 34406400'
        )
        .EUt(GTValues.VA[GTValues.IV])
        .duration(200)
    //谷神星
    gtr.electrolyzer('disksavior:ev_t4')
        .notConsumable('1024x gtceu:ev_fluid_drilling_rig')
        .notConsumable('kubejs:ceresstone')
        .outputFluids(
            'gtceu:neon 19660800',
            'gtceu:radon 14745600',
            'gtceu:xenon 19660800',
            'gtceu:krypton 19660800'
        )
        .EUt(GTValues.VA[GTValues.IV])
        .duration(200)
    //木卫一
    gtr.electrolyzer('disksavior:ev_t5_1')
        .notConsumable('1024x gtceu:ev_fluid_drilling_rig')
        .notConsumable('kubejs:iostone')
        .outputFluids(
            'gtceu:coal_gas 19660800'
        )
        .EUt(GTValues.VA[GTValues.IV])
        .duration(200)
    //木卫三
    gtr.electrolyzer('disksavior:ev_t5_2')
        .notConsumable('1024x gtceu:ev_fluid_drilling_rig')
        .notConsumable('kubejs:ganymedestone')
        .outputFluids(
            'gtceu:hydrochloric_acid 19660800'
        )
        .EUt(GTValues.VA[GTValues.IV])
        .duration(200)
    //冥王星
    gtr.electrolyzer('disksavior:ev_t6_1')
        .notConsumable('1024x gtceu:ev_fluid_drilling_rig')
        .notConsumable('kubejs:plutostone')
        .outputFluids(
            'gtceu:nitric_acid 19660800'
        )
        .EUt(GTValues.VA[GTValues.IV])
        .duration(200)
    //土卫二
    gtr.electrolyzer('disksavior:ev_t6_2')
        .notConsumable('1024x gtceu:ev_fluid_drilling_rig')
        .notConsumable('kubejs:enceladusstone')
        .outputFluids(
            'gtceu:chlorine 19660800',
            'gtceu:fluorine 9830400'
        )
        .EUt(GTValues.VA[GTValues.IV])
        .duration(200)
    //土卫六
    gtr.electrolyzer('disksavior:ev_t6_3')
        .notConsumable('1024x gtceu:ev_fluid_drilling_rig')
        .notConsumable('kubejs:titanstone')
        .outputFluids(
            'gtceu:methane 19660800',
            'gtceu:benzene 14745600',
            'gtceu:charcoal_byproducts 9830400'
        )
        .EUt(GTValues.VA[GTValues.IV])
        .duration(200)
    //巴纳德C
    gtr.electrolyzer('disksavior:ev_t8')
        .notConsumable('1024x gtceu:ev_fluid_drilling_rig')
        .notConsumable('kubejs:barnarda_log')
        .outputFluids(
            'gtceu:unknowwater 19660800'
        )
        .EUt(GTValues.VA[GTValues.IV])
        .duration(200)
    //————————————————————————————————————————————————————————————————————————————————zpm
    //主世界
    gtr.electrolyzer('disksavior:zpm_t0')
        .notConsumable('1024x gtceu:zpm_fluid_drilling_rig')
        .notConsumable('minecraft:dirt')
        .outputFluids(
            'gtceu:salt_water 2516582400',
            'gtceu:natural_gas 943718400',
            'gtceu:oil_medium 1258291200',
            'gtceu:oil_light 1572864000',
            'gtceu:oil_heavy 943718400',
            'gtceu:oil 1258291200'
        )
        .EUt(GTValues.VA[GTValues.UV])
        .duration(200)
    //月球
    gtr.electrolyzer('disksavior:zpm_t1')
        .notConsumable('1024x gtceu:zpm_fluid_drilling_rig')
        .notConsumable('ad_astra:moon_stone')
        .outputFluids(
            'gtceu:helium_3 629145600',
            'gtceu:helium 1258291200'
        )
        .EUt(GTValues.VA[GTValues.UV])
        .duration(200)
    //火星
    gtr.electrolyzer('disksavior:zpm_t2')
        .notConsumable('1024x gtceu:zpm_fluid_drilling_rig')
        .notConsumable('ad_astra:mars_stone')
        .outputFluids(
            'gtceu:radon 1258291200'
        )
        .EUt(GTValues.VA[GTValues.UV])
        .duration(200)
    //金星
    gtr.electrolyzer('disksavior:zpm_t3_1')
        .notConsumable('1024x gtceu:zpm_fluid_drilling_rig')
        .notConsumable('ad_astra:venus_stone')
        .outputFluids(
            'gtceu:sulfuric_acid 1258291200'
        )
        .EUt(GTValues.VA[GTValues.UV])
        .duration(200)
    //水星
    gtr.electrolyzer('disksavior:zpm_t3_2')
        .notConsumable('1024x gtceu:zpm_fluid_drilling_rig')
        .notConsumable('ad_astra:mercury_stone')
        .outputFluids(
            'gtceu:deuterium 943718400'
        )
        .EUt(GTValues.VA[GTValues.UV])
        .duration(200)
    //下界
    gtr.electrolyzer('disksavior:zpm_t3_3')
        .notConsumable('1024x gtceu:zpm_fluid_drilling_rig')
        .notConsumable('minecraft:netherrack')
        .outputFluids(
            'minecraft:lava 4089446400',
            'gtceu:natural_gas 2202009600'
        )
        .EUt(GTValues.VA[GTValues.UV])
        .duration(200)
    //谷神星
    gtr.electrolyzer('disksavior:zpm_t4')
        .notConsumable('1024x gtceu:zpm_fluid_drilling_rig')
        .notConsumable('kubejs:ceresstone')
        .outputFluids(
            'gtceu:neon 1258291200',
            'gtceu:radon 943718400',
            'gtceu:xenon 1258291200',
            'gtceu:krypton 1258291200'
        )
        .EUt(GTValues.VA[GTValues.UV])
        .duration(200)
    //木卫一
    gtr.electrolyzer('disksavior:zpm_t5_1')
        .notConsumable('1024x gtceu:zpm_fluid_drilling_rig')
        .notConsumable('kubejs:iostone')
        .outputFluids(
            'gtceu:coal_gas 1258291200'
        )
        .EUt(GTValues.VA[GTValues.UV])
        .duration(200)
    //木卫三
    gtr.electrolyzer('disksavior:zpm_t5_2')
        .notConsumable('1024x gtceu:zpm_fluid_drilling_rig')
        .notConsumable('kubejs:ganymedestone')
        .outputFluids(
            'gtceu:hydrochloric_acid 1258291200'
        )
        .EUt(GTValues.VA[GTValues.UV])
        .duration(200)
    //冥王星
    gtr.electrolyzer('disksavior:zpm_t6_1')
        .notConsumable('1024x gtceu:zpm_fluid_drilling_rig')
        .notConsumable('kubejs:plutostone')
        .outputFluids(
            'gtceu:nitric_acid 1258291200'
        )
        .EUt(GTValues.VA[GTValues.UV])
        .duration(200)
    //土卫二
    gtr.electrolyzer('disksavior:zpm_t6_2')
        .notConsumable('1024x gtceu:zpm_fluid_drilling_rig')
        .notConsumable('kubejs:enceladusstone')
        .outputFluids(
            'gtceu:chlorine 1258291200',
            'gtceu:fluorine 629145600'
        )
        .EUt(GTValues.VA[GTValues.UV])
        .duration(200)
    //土卫六
    gtr.electrolyzer('disksavior:zpm_t6_3')
        .notConsumable('1024x gtceu:zpm_fluid_drilling_rig')
        .notConsumable('kubejs:titanstone')
        .outputFluids(
            'gtceu:methane 1258291200',
            'gtceu:benzene 943718400',
            'gtceu:charcoal_byproducts 629145600'
        )
        .EUt(GTValues.VA[GTValues.UV])
        .duration(200)
    //巴纳德C
    gtr.electrolyzer('disksavior:zpm_t8')
        .notConsumable('1024x gtceu:zpm_fluid_drilling_rig')
        .notConsumable('kubejs:barnarda_log')
        .outputFluids(
            'gtceu:unknowwater 1258291200'
        )
        .EUt(GTValues.VA[GTValues.UV])
        .duration(200)
    //鸿蒙之眼集大成配方
    //批处理16384倍
    //实际数值要-1，因为2147483648x会爆
    //集成了来自群友@aach.aic的鸿蒙之眼+
    gtr.cosmos_simulation('disksavior:cosmos_simulation_spuer_pro_max_plus_glodversion_16384')
        .itemInputs('disksavior:quantum_chromodynamic_charge_super')
        .itemOutputs(
            '2147483647x gtceu:carbon_dust',
            '2147483647x gtceu:phosphorus_dust',
            '2147483647x gtceu:sulfur_dust',
            '2147483647x gtceu:selenium_dust',
            '2147483647x gtceu:iodine_dust',
            '2147483647x gtceu:boron_dust',
            '2147483647x gtceu:silicon_dust',
            '2147483647x gtceu:germanium_dust',
            '2147483647x gtceu:arsenic_dust',
            '2147483647x gtceu:antimony_dust',
            '2147483647x gtceu:tellurium_dust',
            '2147483647x gtceu:astatine_dust',
            '2147483647x gtceu:aluminium_dust',
            '2147483647x gtceu:gallium_dust',
            '2147483647x gtceu:indium_dust',
            '2147483647x gtceu:tin_dust',
            '2147483647x gtceu:thallium_dust',
            '2147483647x gtceu:lead_dust',
            '2147483647x gtceu:bismuth_dust',
            '2147483647x gtceu:polonium_dust',
            '2147483647x gtceu:titanium_dust',
            '2147483647x gtceu:vanadium_dust',
            '2147483647x gtceu:chromium_dust',
            '2147483647x gtceu:manganese_dust',
            '2147483647x gtceu:iron_dust',
            '2147483647x gtceu:cobalt_dust',
            '2147483647x gtceu:nickel_dust',
            '2147483647x gtceu:copper_dust',
            '2147483647x gtceu:zinc_dust',
            '2147483647x gtceu:zirconium_dust',
            '2147483647x gtceu:niobium_dust',
            '2147483647x gtceu:molybdenum_dust',
            '2147483647x gtceu:technetium_dust',
            '2147483647x gtceu:ruthenium_dust',
            '2147483647x gtceu:rhodium_dust',
            '2147483647x gtceu:palladium_dust',
            '2147483647x gtceu:silver_dust',
            '2147483647x gtceu:cadmium_dust',
            '2147483647x gtceu:hafnium_dust',
            '2147483647x gtceu:tantalum_dust',
            '2147483647x gtceu:tungsten_dust',
            '2147483647x gtceu:rhenium_dust',
            '2147483647x gtceu:osmium_dust',
            '2147483647x gtceu:iridium_dust',
            '2147483647x gtceu:platinum_dust',
            '2147483647x gtceu:gold_dust',
            '2147483647x gtceu:beryllium_dust',
            '2147483647x gtceu:magnesium_dust',
            '2147483647x gtceu:calcium_dust',
            '2147483647x gtceu:strontium_dust',
            '2147483647x gtceu:barium_dust',
            '2147483647x gtceu:radium_dust',
            '2147483647x gtceu:yttrium_dust',
            '2147483647x gtceu:lithium_dust',
            '2147483647x gtceu:sodium_dust',
            '2147483647x gtceu:potassium_dust',
            '2147483647x gtceu:rubidium_dust',
            '2147483647x gtceu:caesium_dust',
            '2147483647x gtceu:francium_dust',
            '2147483647x gtceu:scandium_dust',
            '2147483647x gtceu:actinium_dust',
            '2147483647x gtceu:thorium_dust',
            '2147483647x gtceu:protactinium_dust',
            '2147483647x gtceu:uranium_dust',
            '2147483647x gtceu:neptunium_dust',
            '2147483647x gtceu:plutonium_dust',
            '2147483647x gtceu:americium_dust',
            '2147483647x gtceu:curium_dust',
            '2147483647x gtceu:berkelium_dust',
            '2147483647x gtceu:californium_dust',
            '2147483647x gtceu:einsteinium_dust',
            '2147483647x gtceu:fermium_dust',
            '2147483647x gtceu:mendelevium_dust',
            '2147483647x gtceu:nobelium_dust',
            '2147483647x gtceu:lawrencium_dust',
            '2147483647x gtceu:lanthanum_dust',
            '2147483647x gtceu:cerium_dust',
            '2147483647x gtceu:praseodymium_dust',
            '2147483647x gtceu:neodymium_dust',
            '2147483647x gtceu:promethium_dust',
            '2147483647x gtceu:samarium_dust',
            '2147483647x gtceu:europium_dust',
            '2147483647x gtceu:gadolinium_dust',
            '2147483647x gtceu:terbium_dust',
            '2147483647x gtceu:dysprosium_dust',
            '2147483647x gtceu:holmium_dust',
            '2147483647x gtceu:erbium_dust',
            '2147483647x gtceu:thulium_dust',
            '2147483647x gtceu:ytterbium_dust',
            '2147483647x gtceu:lutetium_dust',
            '2147483647x gtceu:rutherfordium_dust',
            '2147483647x gtceu:dubnium_dust',
            '2147483647x gtceu:seaborgium_dust',
            '2147483647x gtceu:bohrium_dust',
            '2147483647x gtceu:hassium_dust',
            '2147483647x gtceu:meitnerium_dust',
            '2147483647x gtceu:darmstadtium_dust',
            '2147483647x gtceu:roentgenium_dust',
            '2147483647x gtceu:copernicium_dust',
            '2147483647x gtceu:nihonium_dust',
            '2147483647x gtceu:flerovium_dust',
            '2147483647x gtceu:moscovium_dust',
            '2147483647x gtceu:livermorium_dust',
            '2147483647x gtceu:tennessine_dust',
            '2147483647x gtceu:oganesson_dust',
            '2147483647x gtceu:jasper_dust',
            '2147483647x gtceu:naquadah_dust',
            '2147483647x gtceu:enriched_naquadah_dust',
            '2147483647x gtceu:naquadria_dust',
            '2147483647x gtceu:duranium_dust',
            '2147483647x gtceu:tritanium_dust',
            '2147483647x gtceu:mithril_dust',
            '2147483647x gtceu:orichalcum_dust',
            '2147483647x gtceu:enderium_dust',
            '2147483647x gtceu:adamantine_dust',
            '2147483647x gtceu:vibranium_dust',
            '2147483647x gtceu:infuscolium_dust',
            '2147483647x gtceu:taranium_dust',
            '2147483647x gtceu:draconium_dust',
            '2147483647x gtceu:starmetal_dust',
            //下面的是来自群友@aach.aic 的鸿蒙之眼+，此处已集成
            '268435456x gtceu:white_dwarf_mtter_dust',
            '268435456x gtceu:black_dwarf_mtter_dust',
            '2147483647x ae2:sky_dust',
            '2147483647x gtceu:trinium_dust',
            '2147483647x gtceu:plutonium_241_dust',
            '2147483647x gtceu:titanium_50_dust',
            '2147483647x gtceu:copper76_dust',
            '2147483647x gtceu:uranium_235_dust',
            '2147483647x gtceu:perditio_crystal_dust',
            '2147483647x gtceu:earth_crystal_dust',
            '2147483647x gtceu:ignis_crystal_dust',
            '2147483647x gtceu:tartarite_dust',
            '2147483647x gtceu:uruium_dust',
            '2147483647x gtceu:force_dust',
            '2147483647x gtceu:alien_algae_dust',
            '2147483647x gtceu:bloodstone_dust',
            '2147483647x minecraft:netherite_scrap',
            '2147483647x gtceu:purified_tengam_dust',
            '2147483647x gtceu:quantanium_dust',
            '2147483647x gtceu:bedrock_dust',
            '2147483647x gtceu:damascus_steel_dust',
            '2147483647x avaritia:neutron_pile',
            '2147483647x gtceu:certus_quartz_dust',
            '2147483647x ae2:fluix_dust'
        )
        .outputFluids(
            'gtceu:spacetime 4194304',
            'gtceu:raw_star_matter_plasma 21474836480',
            'gtceu:quark_gluon_plasma 21474836480',
            'gtceu:heavy_quark_degenerate_matter_plasma 21474836480',
            'gtceu:neutronium 214748364800',
            'gtceu:heavy_lepton_mixture 214748364800',
            'gtceu:hydrogen 2147483648000',
            'gtceu:nitrogen 2147483648000',
            'gtceu:oxygen 2147483648000',
            'gtceu:fluorine 2147483648000',
            'gtceu:chlorine 2147483648000',
            'gtceu:bromine 2147483648000',
            'gtceu:helium 2147483648000',
            'gtceu:neon 2147483648000',
            'gtceu:argon 2147483648000',
            'gtceu:krypton 2147483648000',
            'gtceu:xenon 2147483648000',
            'gtceu:radon 2147483648000',
            'gtceu:mercury 2147483648000',
            'gtceu:deuterium 2147483648000',
            'gtceu:tritium 2147483648000',
            'gtceu:helium_3 2147483648000',
            'gtceu:unknowwater 2147483648000',
            'gtceu:uu_matter 2147483648000'
        )
        .duration(19660800)
        .inputFluids('gtceu:cosmic_element 16777216000')
    //鸿蒙之眼集大成配方转移到化反
    //批处理16384倍
    //实际数值要-1，因为2147483648x会爆
    //集成了来自群友@aach.aic的鸿蒙之眼+
    //数值十分爆炸
    gtr.chemical_reactor('disksavior:cosmos_simulation_spuer_pro_max_plus_glodversion_16384')
        .itemInputs('disksavior:quantum_chromodynamic_charge_super')
        .inputFluids(
            'gtceu:cosmic_element 16777216000',
            'gtceu:hydrogen 16777216000000',
            'gtceu:helium 16777216000000'
        )
        .itemOutputs(
            '2147483647x gtceu:carbon_dust',
            '2147483647x gtceu:phosphorus_dust',
            '2147483647x gtceu:sulfur_dust',
            '2147483647x gtceu:selenium_dust',
            '2147483647x gtceu:iodine_dust',
            '2147483647x gtceu:boron_dust',
            '2147483647x gtceu:silicon_dust',
            '2147483647x gtceu:germanium_dust',
            '2147483647x gtceu:arsenic_dust',
            '2147483647x gtceu:antimony_dust',
            '2147483647x gtceu:tellurium_dust',
            '2147483647x gtceu:astatine_dust',
            '2147483647x gtceu:aluminium_dust',
            '2147483647x gtceu:gallium_dust',
            '2147483647x gtceu:indium_dust',
            '2147483647x gtceu:tin_dust',
            '2147483647x gtceu:thallium_dust',
            '2147483647x gtceu:lead_dust',
            '2147483647x gtceu:bismuth_dust',
            '2147483647x gtceu:polonium_dust',
            '2147483647x gtceu:titanium_dust',
            '2147483647x gtceu:vanadium_dust',
            '2147483647x gtceu:chromium_dust',
            '2147483647x gtceu:manganese_dust',
            '2147483647x gtceu:iron_dust',
            '2147483647x gtceu:cobalt_dust',
            '2147483647x gtceu:nickel_dust',
            '2147483647x gtceu:copper_dust',
            '2147483647x gtceu:zinc_dust',
            '2147483647x gtceu:zirconium_dust',
            '2147483647x gtceu:niobium_dust',
            '2147483647x gtceu:molybdenum_dust',
            '2147483647x gtceu:technetium_dust',
            '2147483647x gtceu:ruthenium_dust',
            '2147483647x gtceu:rhodium_dust',
            '2147483647x gtceu:palladium_dust',
            '2147483647x gtceu:silver_dust',
            '2147483647x gtceu:cadmium_dust',
            '2147483647x gtceu:hafnium_dust',
            '2147483647x gtceu:tantalum_dust',
            '2147483647x gtceu:tungsten_dust',
            '2147483647x gtceu:rhenium_dust',
            '2147483647x gtceu:osmium_dust',
            '2147483647x gtceu:iridium_dust',
            '2147483647x gtceu:platinum_dust',
            '2147483647x gtceu:gold_dust',
            '2147483647x gtceu:beryllium_dust',
            '2147483647x gtceu:magnesium_dust',
            '2147483647x gtceu:calcium_dust',
            '2147483647x gtceu:strontium_dust',
            '2147483647x gtceu:barium_dust',
            '2147483647x gtceu:radium_dust',
            '2147483647x gtceu:yttrium_dust',
            '2147483647x gtceu:lithium_dust',
            '2147483647x gtceu:sodium_dust',
            '2147483647x gtceu:potassium_dust',
            '2147483647x gtceu:rubidium_dust',
            '2147483647x gtceu:caesium_dust',
            '2147483647x gtceu:francium_dust',
            '2147483647x gtceu:scandium_dust',
            '2147483647x gtceu:actinium_dust',
            '2147483647x gtceu:thorium_dust',
            '2147483647x gtceu:protactinium_dust',
            '2147483647x gtceu:uranium_dust',
            '2147483647x gtceu:neptunium_dust',
            '2147483647x gtceu:plutonium_dust',
            '2147483647x gtceu:americium_dust',
            '2147483647x gtceu:curium_dust',
            '2147483647x gtceu:berkelium_dust',
            '2147483647x gtceu:californium_dust',
            '2147483647x gtceu:einsteinium_dust',
            '2147483647x gtceu:fermium_dust',
            '2147483647x gtceu:mendelevium_dust',
            '2147483647x gtceu:nobelium_dust',
            '2147483647x gtceu:lawrencium_dust',
            '2147483647x gtceu:lanthanum_dust',
            '2147483647x gtceu:cerium_dust',
            '2147483647x gtceu:praseodymium_dust',
            '2147483647x gtceu:neodymium_dust',
            '2147483647x gtceu:promethium_dust',
            '2147483647x gtceu:samarium_dust',
            '2147483647x gtceu:europium_dust',
            '2147483647x gtceu:gadolinium_dust',
            '2147483647x gtceu:terbium_dust',
            '2147483647x gtceu:dysprosium_dust',
            '2147483647x gtceu:holmium_dust',
            '2147483647x gtceu:erbium_dust',
            '2147483647x gtceu:thulium_dust',
            '2147483647x gtceu:ytterbium_dust',
            '2147483647x gtceu:lutetium_dust',
            '2147483647x gtceu:rutherfordium_dust',
            '2147483647x gtceu:dubnium_dust',
            '2147483647x gtceu:seaborgium_dust',
            '2147483647x gtceu:bohrium_dust',
            '2147483647x gtceu:hassium_dust',
            '2147483647x gtceu:meitnerium_dust',
            '2147483647x gtceu:darmstadtium_dust',
            '2147483647x gtceu:roentgenium_dust',
            '2147483647x gtceu:copernicium_dust',
            '2147483647x gtceu:nihonium_dust',
            '2147483647x gtceu:flerovium_dust',
            '2147483647x gtceu:moscovium_dust',
            '2147483647x gtceu:livermorium_dust',
            '2147483647x gtceu:tennessine_dust',
            '2147483647x gtceu:oganesson_dust',
            '2147483647x gtceu:jasper_dust',
            '2147483647x gtceu:naquadah_dust',
            '2147483647x gtceu:enriched_naquadah_dust',
            '2147483647x gtceu:naquadria_dust',
            '2147483647x gtceu:duranium_dust',
            '2147483647x gtceu:tritanium_dust',
            '2147483647x gtceu:mithril_dust',
            '2147483647x gtceu:orichalcum_dust',
            '2147483647x gtceu:enderium_dust',
            '2147483647x gtceu:adamantine_dust',
            '2147483647x gtceu:vibranium_dust',
            '2147483647x gtceu:infuscolium_dust',
            '2147483647x gtceu:taranium_dust',
            '2147483647x gtceu:draconium_dust',
            '2147483647x gtceu:starmetal_dust',
            //下面的是来自群友@aach.aic 的鸿蒙之眼+，此处已集成
            '268435456x gtceu:white_dwarf_mtter_dust',
            '268435456x gtceu:black_dwarf_mtter_dust',
            '2147483647x ae2:sky_dust',
            '2147483647x gtceu:trinium_dust',
            '2147483647x gtceu:plutonium_241_dust',
            '2147483647x gtceu:titanium_50_dust',
            '2147483647x gtceu:copper76_dust',
            '2147483647x gtceu:uranium_235_dust',
            '2147483647x gtceu:perditio_crystal_dust',
            '2147483647x gtceu:earth_crystal_dust',
            '2147483647x gtceu:ignis_crystal_dust',
            '2147483647x gtceu:tartarite_dust',
            '2147483647x gtceu:uruium_dust',
            '2147483647x gtceu:force_dust',
            '2147483647x gtceu:alien_algae_dust',
            '2147483647x gtceu:bloodstone_dust',
            '2147483647x minecraft:netherite_scrap',
            '2147483647x gtceu:purified_tengam_dust',
            '2147483647x gtceu:quantanium_dust',
            '2147483647x gtceu:bedrock_dust',
            '2147483647x gtceu:damascus_steel_dust',
            '2147483647x avaritia:neutron_pile',
            '2147483647x gtceu:certus_quartz_dust',
            '2147483647x ae2:fluix_dust'
        )
        .outputFluids(
            'gtceu:spacetime 4194304',
            'gtceu:raw_star_matter_plasma 21474836480',
            'gtceu:quark_gluon_plasma 21474836480',
            'gtceu:heavy_quark_degenerate_matter_plasma 21474836480',
            'gtceu:neutronium 214748364800',
            'gtceu:heavy_lepton_mixture 214748364800',
            'gtceu:hydrogen 2147483648000',
            'gtceu:nitrogen 2147483648000',
            'gtceu:oxygen 2147483648000',
            'gtceu:fluorine 2147483648000',
            'gtceu:chlorine 2147483648000',
            'gtceu:bromine 2147483648000',
            'gtceu:helium 2147483648000',
            'gtceu:neon 2147483648000',
            'gtceu:argon 2147483648000',
            'gtceu:krypton 2147483648000',
            'gtceu:xenon 2147483648000',
            'gtceu:radon 2147483648000',
            'gtceu:mercury 2147483648000',
            'gtceu:deuterium 2147483648000',
            'gtceu:tritium 2147483648000',
            'gtceu:helium_3 2147483648000',
            'gtceu:unknowwater 2147483648000',
            'gtceu:uu_matter 2147483648000'
        )
        .EUt(5277655810867200)
        .duration(1200)
})