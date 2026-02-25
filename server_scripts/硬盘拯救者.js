ServerEvents.recipes(event => {
    const gtr = event.recipes.gtceu
    //————————————————————————————————————————————————————————————————————————————————搅拌机科技
    //搅拌机合木化工厂，加点胶水粘起来就行了真是神奇啊
    gtr.mixer("rlcyyg:wood_distillation")
        .itemInputs(
            "64x gtceu:distillation_tower",
            "32x gtceu:pyrolyse_oven"
        )
        .inputFluids("gtceu:glue 185254")
        .itemOutputs("gtceu:wood_distillation")
        .EUt(GTValues.VA[GTValues.HV])
        .duration(114514)
    //搅拌机合石化工厂
    gtr.mixer("rlcyyg:petrochemical_plant")
        .itemInputs(
            "128x gtceu:distillation_tower",
            "64x gtceu:cracker",
            "16x gtceu:large_chemical_reactor"
        )
        .inputFluids("gtceu:glue 185254")
        .itemOutputs("gtceu:petrochemical_plant")
        .EUt(GTValues.VA[GTValues.HV])
        .duration(114514)
    //大集气加强
    //空气
    gtr.large_gas_collector("rlcyyg:7")
        .notConsumable("kubejs:overworld_data")
        .notConsumable("gtceu:cold_ice_freezer")
        .outputFluids("gtceu:liquid_air 64000000")
        .EUt(GTValues.VA[GTValues.IV])
        .duration(2000)
    //下界空气
    gtr.large_gas_collector("rlcyyg:8")
        .notConsumable("kubejs:nether_data")
        .notConsumable("gtceu:cold_ice_freezer")
        .outputFluids("gtceu:liquid_nether_air 64000000")
        .EUt(GTValues.VA[GTValues.LuV])
        .duration(2000)
    //末地空气
    gtr.large_gas_collector("rlcyyg:9")
        .notConsumable("kubejs:end_data")
        .notConsumable("gtceu:cold_ice_freezer")
        .outputFluids("gtceu:liquid_ender_air 64000000")
        .EUt(GTValues.VA[GTValues.ZPM])
        .duration(2000)
    //矿粉还原矿处中间产物
    //闪电处理32号电路
    //晶质铀
    gtr.lightning_processor("rlcyyg:old_1")
        .circuit(32)
        .itemInputs("2x gtceu:impure_uraninite_dust")
        .itemOutputs("gtceu:uraninite_dust")
        .EUt(GTValues.VA[GTValues.ULV])
        .duration(20)
    //黝铜
    gtr.lightning_processor("rlcyyg:old_2")
        .circuit(32)
        .itemInputs("2x gtceu:tetrahedrite_dust")
        .itemOutputs("gtceu:purified_tetrahedrite_ore")
        .EUt(GTValues.VA[GTValues.ULV])
        .duration(20)
    //斑铜
    gtr.lightning_processor("rlcyyg:old_3")
        .circuit(32)
        .itemInputs("2x gtceu:bornite_dust")
        .itemOutputs("gtceu:purified_bornite_ore")
        .EUt(GTValues.VA[GTValues.ULV])
        .duration(20)
    //辉铜
    gtr.lightning_processor("rlcyyg:old_4")
        .circuit(32)
        .itemInputs("2x gtceu:chalcocite_dust")
        .itemOutputs("gtceu:purified_chalcocite_ore")
        .EUt(GTValues.VA[GTValues.ULV])
        .duration(20)
    //谢尔顿
    gtr.lightning_processor("rlcyyg:old_5")
        .circuit(32)
        .itemInputs("2x gtceu:cooperite_dust")
        .itemOutputs("gtceu:purified_cooperite_ore")
        .EUt(GTValues.VA[GTValues.ULV])
        .duration(20)
    //一些去除维度限制的配方
    //大马士革钢
    gtr.chemical_bath("rlcyyg:fd_dsd")
        .itemInputs("gtceu:steel_dust")
        .inputFluids("gtceu:lubricant 100")
        .itemOutputs("gtceu:damascus_steel_dust")
        .EUt(GTValues.VA[GTValues.LV])
        .duration(200)
    //主世界数据
    gtr.world_data_scanner("rlcyyg:fd_o")
        .circuit(2)
        .itemInputs(
            "64x gtceu:stone_dust",
            "gtceu:data_stick"
        )
        .inputFluids(
            "gtceu:pcb_coolant 100",
            "gtceu:air 64000"
        )
        .itemOutputs("kubejs:overworld_data")
        .EUt(GTValues.VA[GTValues.ULV])
        .duration(20)
    //下界数据
    gtr.world_data_scanner("rlcyyg:fd_n")
        .circuit(2)
        .itemInputs(
            "64x gtceu:netherrack_dust",
            "2x gtceu:data_stick"
        )
        .inputFluids(
            "gtceu:pcb_coolant 100",
            "gtceu:nether_air 64000"
        )
        .itemOutputs("kubejs:nether_data")
        .EUt(GTValues.VA[GTValues.ULV])
        .duration(20)
    //末地数据
    gtr.world_data_scanner("rlcyyg:fd_e")
        .circuit(2)
        .itemInputs(
            "64x gtceu:endstone_dust",
            "4x gtceu:data_stick"
        )
        .inputFluids(
            "gtceu:pcb_coolant 100",
            "gtceu:ender_air 64000"
        )
        .itemOutputs("kubejs:end_data")
        .EUt(GTValues.VA[GTValues.ULV])
        .duration(20)
    //流体钻机电解
    //————————————————————————————————————————————————————————————————————————————————mv
    //主世界
    gtr.electrolyzer("rlcyyg:mv_t0")
        .notConsumable("1024x gtceu:mv_fluid_drilling_rig")
        .notConsumable("minecraft:dirt")
        .outputFluids(
            "gtceu:salt_water 614400",
            "gtceu:natural_gas 230400",
            "gtceu:oil_medium 307200",
            "gtceu:oil_light 384000",
            "gtceu:oil_heavy 230400",
            "gtceu:oil 307200"
        )
        .EUt(GTValues.VA[GTValues.HV])
        .duration(200)
    //月球
    gtr.electrolyzer("rlcyyg:mv_t1")
        .notConsumable("1024x gtceu:mv_fluid_drilling_rig")
        .notConsumable("ad_astra:moon_stone")
        .outputFluids(
            "gtceu:helium_3 153600",
            "gtceu:helium 307200"
        )
        .EUt(GTValues.VA[GTValues.HV])
        .duration(200)
    //火星
    gtr.electrolyzer("rlcyyg:mv_t2")
        .notConsumable("1024x gtceu:mv_fluid_drilling_rig")
        .notConsumable("ad_astra:mars_stone")
        .outputFluids(
            "gtceu:radon 307200"
        )
        .EUt(GTValues.VA[GTValues.HV])
        .duration(200)
    //金星
    gtr.electrolyzer("rlcyyg:mv_t3_1")
        .notConsumable("1024x gtceu:mv_fluid_drilling_rig")
        .notConsumable("ad_astra:venus_stone")
        .outputFluids(
            "gtceu:sulfuric_acid 307200"
        )
        .EUt(GTValues.VA[GTValues.HV])
        .duration(200)
    //水星
    gtr.electrolyzer("rlcyyg:mv_t3_2")
        .notConsumable("1024x gtceu:mv_fluid_drilling_rig")
        .notConsumable("ad_astra:mercury_stone")
        .outputFluids(
            "gtceu:deuterium 230400"
        )
        .EUt(GTValues.VA[GTValues.HV])
        .duration(200)
    //下界
    gtr.electrolyzer("rlcyyg:mv_t3_3")
        .notConsumable("1024x gtceu:mv_fluid_drilling_rig")
        .notConsumable("minecraft:netherrack")
        .outputFluids(
            "minecraft:lava 998400",
            "gtceu:natural_gas 537600"
        )
        .EUt(GTValues.VA[GTValues.HV])
        .duration(200)
    //谷神星
    gtr.electrolyzer("rlcyyg:mv_t4")
        .notConsumable("1024x gtceu:mv_fluid_drilling_rig")
        .notConsumable("kubejs:ceresstone")
        .outputFluids(
            "gtceu:neon 307200",
            "gtceu:radon 230400",
            "gtceu:xenon 307200",
            "gtceu:krypton 307200"
        )
        .EUt(GTValues.VA[GTValues.HV])
        .duration(200)
    //木卫一
    gtr.electrolyzer("rlcyyg:mv_t5_1")
        .notConsumable("1024x gtceu:mv_fluid_drilling_rig")
        .notConsumable("kubejs:iostone")
        .outputFluids(
            "gtceu:coal_gas 307200"
        )
        .EUt(GTValues.VA[GTValues.HV])
        .duration(200)
    //木卫三
    gtr.electrolyzer("rlcyyg:mv_t5_2")
        .notConsumable("1024x gtceu:mv_fluid_drilling_rig")
        .notConsumable("kubejs:ganymedestone")
        .outputFluids(
            "gtceu:hydrochloric_acid 307200"
        )
        .EUt(GTValues.VA[GTValues.HV])
        .duration(200)
    //冥王星
    gtr.electrolyzer("rlcyyg:mv_t6_1")
        .notConsumable("1024x gtceu:mv_fluid_drilling_rig")
        .notConsumable("kubejs:plutostone")
        .outputFluids(
            "gtceu:nitric_acid 307200"
        )
        .EUt(GTValues.VA[GTValues.HV])
        .duration(200)
    //土卫二
    gtr.electrolyzer("rlcyyg:mv_t6_2")
        .notConsumable("1024x gtceu:mv_fluid_drilling_rig")
        .notConsumable("kubejs:enceladusstone")
        .outputFluids(
            "gtceu:chlorine 307200",
            "gtceu:fluorine 153600"
        )
        .EUt(GTValues.VA[GTValues.HV])
        .duration(200)
    //土卫六
    gtr.electrolyzer("rlcyyg:mv_t6_3")
        .notConsumable("1024x gtceu:mv_fluid_drilling_rig")
        .notConsumable("kubejs:titanstone")
        .outputFluids(
            "gtceu:methane 307200",
            "gtceu:benzene 230400",
            "gtceu:charcoal_byproducts 153600"
        )
        .EUt(GTValues.VA[GTValues.HV])
        .duration(200)
    //巴纳德C
    gtr.electrolyzer("rlcyyg:mv_t8")
        .notConsumable("1024x gtceu:mv_fluid_drilling_rig")
        .notConsumable("kubejs:barnarda_log")
        .outputFluids(
            "gtceu:unknowwater 307200"
        )
        .EUt(GTValues.VA[GTValues.HV])
        .duration(200)
    //————————————————————————————————————————————————————————————————————————————————hv
    //主世界
    gtr.electrolyzer("rlcyyg:hv_t0")
        .notConsumable("1024x gtceu:hv_fluid_drilling_rig")
        .notConsumable("minecraft:dirt")
        .outputFluids(
            "gtceu:salt_water 9830400",
            "gtceu:natural_gas 3686400",
            "gtceu:oil_medium 4915200",
            "gtceu:oil_light 6144000",
            "gtceu:oil_heavy 3686400",
            "gtceu:oil 4915200"
        )
        .EUt(GTValues.VA[GTValues.EV])
        .duration(200)
    //月球
    gtr.electrolyzer("rlcyyg:hv_t1")
        .notConsumable("1024x gtceu:hv_fluid_drilling_rig")
        .notConsumable("ad_astra:moon_stone")
        .outputFluids(
            "gtceu:helium_3 2457600",
            "gtceu:helium 4915200"
        )
        .EUt(GTValues.VA[GTValues.EV])
        .duration(200)
    //火星
    gtr.electrolyzer("rlcyyg:hv_t2")
        .notConsumable("1024x gtceu:hv_fluid_drilling_rig")
        .notConsumable("ad_astra:mars_stone")
        .outputFluids(
            "gtceu:radon 4915200"
        )
        .EUt(GTValues.VA[GTValues.EV])
        .duration(200)
    //金星
    gtr.electrolyzer("rlcyyg:hv_t3_1")
        .notConsumable("1024x gtceu:hv_fluid_drilling_rig")
        .notConsumable("ad_astra:venus_stone")
        .outputFluids(
            "gtceu:sulfuric_acid 4915200"
        )
        .EUt(GTValues.VA[GTValues.EV])
        .duration(200)
    //水星
    gtr.electrolyzer("rlcyyg:hv_t3_2")
        .notConsumable("1024x gtceu:hv_fluid_drilling_rig")
        .notConsumable("ad_astra:mercury_stone")
        .outputFluids(
            "gtceu:deuterium 3686400"
        )
        .EUt(GTValues.VA[GTValues.EV])
        .duration(200)
    //下界
    gtr.electrolyzer("rlcyyg:hv_t3_3")
        .notConsumable("1024x gtceu:hv_fluid_drilling_rig")
        .notConsumable("minecraft:netherrack")
        .outputFluids(
            "minecraft:lava 15974400",
            "gtceu:natural_gas 8601600"
        )
        .EUt(GTValues.VA[GTValues.EV])
        .duration(200)
    //谷神星
    gtr.electrolyzer("rlcyyg:hv_t4")
        .notConsumable("1024x gtceu:hv_fluid_drilling_rig")
        .notConsumable("kubejs:ceresstone")
        .outputFluids(
            "gtceu:neon 4915200",
            "gtceu:radon 3686400",
            "gtceu:xenon 4915200",
            "gtceu:krypton 4915200"
        )
        .EUt(GTValues.VA[GTValues.EV])
        .duration(200)
    //木卫一
    gtr.electrolyzer("rlcyyg:hv_t5_1")
        .notConsumable("1024x gtceu:hv_fluid_drilling_rig")
        .notConsumable("kubejs:iostone")
        .outputFluids(
            "gtceu:coal_gas 4915200"
        )
        .EUt(GTValues.VA[GTValues.EV])
        .duration(200)
    //木卫三
    gtr.electrolyzer("rlcyyg:hv_t5_2")
        .notConsumable("1024x gtceu:hv_fluid_drilling_rig")
        .notConsumable("kubejs:ganymedestone")
        .outputFluids(
            "gtceu:hydrochloric_acid 4915200"
        )
        .EUt(GTValues.VA[GTValues.EV])
        .duration(200)
    //冥王星
    gtr.electrolyzer("rlcyyg:hv_t6_1")
        .notConsumable("1024x gtceu:hv_fluid_drilling_rig")
        .notConsumable("kubejs:plutostone")
        .outputFluids(
            "gtceu:nitric_acid 4915200"
        )
        .EUt(GTValues.VA[GTValues.EV])
        .duration(200)
    //土卫二
    gtr.electrolyzer("rlcyyg:hv_t6_2")
        .notConsumable("1024x gtceu:hv_fluid_drilling_rig")
        .notConsumable("kubejs:enceladusstone")
        .outputFluids(
            "gtceu:chlorine 4915200",
            "gtceu:fluorine 2457600"
        )
        .EUt(GTValues.VA[GTValues.EV])
        .duration(200)
    //土卫六
    gtr.electrolyzer("rlcyyg:hv_t6_3")
        .notConsumable("1024x gtceu:hv_fluid_drilling_rig")
        .notConsumable("kubejs:titanstone")
        .outputFluids(
            "gtceu:methane 4915200",
            "gtceu:benzene 3686400",
            "gtceu:charcoal_byproducts 2457600"
        )
        .EUt(GTValues.VA[GTValues.EV])
        .duration(200)
    //巴纳德C
    gtr.electrolyzer("rlcyyg:hv_t8")
        .notConsumable("1024x gtceu:hv_fluid_drilling_rig")
        .notConsumable("kubejs:barnarda_log")
        .outputFluids(
            "gtceu:unknowwater 4915200"
        )
        .EUt(GTValues.VA[GTValues.EV])
        .duration(200)
    //————————————————————————————————————————————————————————————————————————————————ev
    //主世界
    gtr.electrolyzer("rlcyyg:ev_t0")
        .notConsumable("1024x gtceu:ev_fluid_drilling_rig")
        .notConsumable("minecraft:dirt")
        .outputFluids(
            "gtceu:salt_water 39321600",
            "gtceu:natural_gas 14745600",
            "gtceu:oil_medium 19660800",
            "gtceu:oil_light 24576000",
            "gtceu:oil_heavy 14745600",
            "gtceu:oil 19660800"
        )
        .EUt(GTValues.VA[GTValues.IV])
        .duration(200)
    //月球
    gtr.electrolyzer("rlcyyg:ev_t1")
        .notConsumable("1024x gtceu:ev_fluid_drilling_rig")
        .notConsumable("ad_astra:moon_stone")
        .outputFluids(
            "gtceu:helium_3 9830400",
            "gtceu:helium 19660800"
        )
        .EUt(GTValues.VA[GTValues.IV])
        .duration(200)
    //火星
    gtr.electrolyzer("rlcyyg:ev_t2")
        .notConsumable("1024x gtceu:ev_fluid_drilling_rig")
        .notConsumable("ad_astra:mars_stone")
        .outputFluids(
            "gtceu:radon 19660800"
        )
        .EUt(GTValues.VA[GTValues.IV])
        .duration(200)
    //金星
    gtr.electrolyzer("rlcyyg:ev_t3_1")
        .notConsumable("1024x gtceu:ev_fluid_drilling_rig")
        .notConsumable("ad_astra:venus_stone")
        .outputFluids(
            "gtceu:sulfuric_acid 19660800"
        )
        .EUt(GTValues.VA[GTValues.IV])
        .duration(200)
    //水星
    gtr.electrolyzer("rlcyyg:ev_t3_2")
        .notConsumable("1024x gtceu:ev_fluid_drilling_rig")
        .notConsumable("ad_astra:mercury_stone")
        .outputFluids(
            "gtceu:deuterium 14745600"
        )
        .EUt(GTValues.VA[GTValues.IV])
        .duration(200)
    //下界
    gtr.electrolyzer("rlcyyg:ev_t3_3")
        .notConsumable("1024x gtceu:ev_fluid_drilling_rig")
        .notConsumable("minecraft:netherrack")
        .outputFluids(
            "minecraft:lava 63897600",
            "gtceu:natural_gas 34406400"
        )
        .EUt(GTValues.VA[GTValues.IV])
        .duration(200)
    //谷神星
    gtr.electrolyzer("rlcyyg:ev_t4")
        .notConsumable("1024x gtceu:ev_fluid_drilling_rig")
        .notConsumable("kubejs:ceresstone")
        .outputFluids(
            "gtceu:neon 19660800",
            "gtceu:radon 14745600",
            "gtceu:xenon 19660800",
            "gtceu:krypton 19660800"
        )
        .EUt(GTValues.VA[GTValues.IV])
        .duration(200)
    //木卫一
    gtr.electrolyzer("rlcyyg:ev_t5_1")
        .notConsumable("1024x gtceu:ev_fluid_drilling_rig")
        .notConsumable("kubejs:iostone")
        .outputFluids(
            "gtceu:coal_gas 19660800"
        )
        .EUt(GTValues.VA[GTValues.IV])
        .duration(200)
    //木卫三
    gtr.electrolyzer("rlcyyg:ev_t5_2")
        .notConsumable("1024x gtceu:ev_fluid_drilling_rig")
        .notConsumable("kubejs:ganymedestone")
        .outputFluids(
            "gtceu:hydrochloric_acid 19660800"
        )
        .EUt(GTValues.VA[GTValues.IV])
        .duration(200)
    //冥王星
    gtr.electrolyzer("rlcyyg:ev_t6_1")
        .notConsumable("1024x gtceu:ev_fluid_drilling_rig")
        .notConsumable("kubejs:plutostone")
        .outputFluids(
            "gtceu:nitric_acid 19660800"
        )
        .EUt(GTValues.VA[GTValues.IV])
        .duration(200)
    //土卫二
    gtr.electrolyzer("rlcyyg:ev_t6_2")
        .notConsumable("1024x gtceu:ev_fluid_drilling_rig")
        .notConsumable("kubejs:enceladusstone")
        .outputFluids(
            "gtceu:chlorine 19660800",
            "gtceu:fluorine 9830400"
        )
        .EUt(GTValues.VA[GTValues.IV])
        .duration(200)
    //土卫六
    gtr.electrolyzer("rlcyyg:ev_t6_3")
        .notConsumable("1024x gtceu:ev_fluid_drilling_rig")
        .notConsumable("kubejs:titanstone")
        .outputFluids(
            "gtceu:methane 19660800",
            "gtceu:benzene 14745600",
            "gtceu:charcoal_byproducts 9830400"
        )
        .EUt(GTValues.VA[GTValues.IV])
        .duration(200)
    //巴纳德C
    gtr.electrolyzer("rlcyyg:ev_t8")
        .notConsumable("1024x gtceu:ev_fluid_drilling_rig")
        .notConsumable("kubejs:barnarda_log")
        .outputFluids(
            "gtceu:unknowwater 19660800"
        )
        .EUt(GTValues.VA[GTValues.IV])
        .duration(200)
    //————————————————————————————————————————————————————————————————————————————————zpm
    //主世界
    gtr.electrolyzer("rlcyyg:zpm_t0")
        .notConsumable("1024x gtceu:zpm_fluid_drilling_rig")
        .notConsumable("minecraft:dirt")
        .outputFluids(
            "gtceu:salt_water 2516582400",
            "gtceu:natural_gas 943718400",
            "gtceu:oil_medium 1258291200",
            "gtceu:oil_light 1572864000",
            "gtceu:oil_heavy 943718400",
            "gtceu:oil 1258291200"
        )
        .EUt(GTValues.VA[GTValues.UV])
        .duration(200)
    //月球
    gtr.electrolyzer("rlcyyg:zpm_t1")
        .notConsumable("1024x gtceu:zpm_fluid_drilling_rig")
        .notConsumable("ad_astra:moon_stone")
        .outputFluids(
            "gtceu:helium_3 629145600",
            "gtceu:helium 1258291200"
        )
        .EUt(GTValues.VA[GTValues.UV])
        .duration(200)
    //火星
    gtr.electrolyzer("rlcyyg:zpm_t2")
        .notConsumable("1024x gtceu:zpm_fluid_drilling_rig")
        .notConsumable("ad_astra:mars_stone")
        .outputFluids(
            "gtceu:radon 1258291200"
        )
        .EUt(GTValues.VA[GTValues.UV])
        .duration(200)
    //金星
    gtr.electrolyzer("rlcyyg:zpm_t3_1")
        .notConsumable("1024x gtceu:zpm_fluid_drilling_rig")
        .notConsumable("ad_astra:venus_stone")
        .outputFluids(
            "gtceu:sulfuric_acid 1258291200"
        )
        .EUt(GTValues.VA[GTValues.UV])
        .duration(200)
    //水星
    gtr.electrolyzer("rlcyyg:zpm_t3_2")
        .notConsumable("1024x gtceu:zpm_fluid_drilling_rig")
        .notConsumable("ad_astra:mercury_stone")
        .outputFluids(
            "gtceu:deuterium 943718400"
        )
        .EUt(GTValues.VA[GTValues.UV])
        .duration(200)
    //下界
    gtr.electrolyzer("rlcyyg:zpm_t3_3")
        .notConsumable("1024x gtceu:zpm_fluid_drilling_rig")
        .notConsumable("minecraft:netherrack")
        .outputFluids(
            "minecraft:lava 4089446400",
            "gtceu:natural_gas 2202009600"
        )
        .EUt(GTValues.VA[GTValues.UV])
        .duration(200)
    //谷神星
    gtr.electrolyzer("rlcyyg:zpm_t4")
        .notConsumable("1024x gtceu:zpm_fluid_drilling_rig")
        .notConsumable("kubejs:ceresstone")
        .outputFluids(
            "gtceu:neon 1258291200",
            "gtceu:radon 943718400",
            "gtceu:xenon 1258291200",
            "gtceu:krypton 1258291200"
        )
        .EUt(GTValues.VA[GTValues.UV])
        .duration(200)
    //木卫一
    gtr.electrolyzer("rlcyyg:zpm_t5_1")
        .notConsumable("1024x gtceu:zpm_fluid_drilling_rig")
        .notConsumable("kubejs:iostone")
        .outputFluids(
            "gtceu:coal_gas 1258291200"
        )
        .EUt(GTValues.VA[GTValues.UV])
        .duration(200)
    //木卫三
    gtr.electrolyzer("rlcyyg:zpm_t5_2")
        .notConsumable("1024x gtceu:zpm_fluid_drilling_rig")
        .notConsumable("kubejs:ganymedestone")
        .outputFluids(
            "gtceu:hydrochloric_acid 1258291200"
        )
        .EUt(GTValues.VA[GTValues.UV])
        .duration(200)
    //冥王星
    gtr.electrolyzer("rlcyyg:zpm_t6_1")
        .notConsumable("1024x gtceu:zpm_fluid_drilling_rig")
        .notConsumable("kubejs:plutostone")
        .outputFluids(
            "gtceu:nitric_acid 1258291200"
        )
        .EUt(GTValues.VA[GTValues.UV])
        .duration(200)
    //土卫二
    gtr.electrolyzer("rlcyyg:zpm_t6_2")
        .notConsumable("1024x gtceu:zpm_fluid_drilling_rig")
        .notConsumable("kubejs:enceladusstone")
        .outputFluids(
            "gtceu:chlorine 1258291200",
            "gtceu:fluorine 629145600"
        )
        .EUt(GTValues.VA[GTValues.UV])
        .duration(200)
    //土卫六
    gtr.electrolyzer("rlcyyg:zpm_t6_3")
        .notConsumable("1024x gtceu:zpm_fluid_drilling_rig")
        .notConsumable("kubejs:titanstone")
        .outputFluids(
            "gtceu:methane 1258291200",
            "gtceu:benzene 943718400",
            "gtceu:charcoal_byproducts 629145600"
        )
        .EUt(GTValues.VA[GTValues.UV])
        .duration(200)
    //巴纳德C
    gtr.electrolyzer("rlcyyg:zpm_t8")
        .notConsumable("1024x gtceu:zpm_fluid_drilling_rig")
        .notConsumable("kubejs:barnarda_log")
        .outputFluids(
            "gtceu:unknowwater 1258291200"
        )
        .EUt(GTValues.VA[GTValues.UV])
        .duration(200)
})