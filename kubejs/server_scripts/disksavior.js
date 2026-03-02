ServerEvents.recipes(event => {
    const gtr = event.recipes.gtceu
    //原始虚空矿机用水
    gtr.primitive_void_ore('rlcyyg:water')
        .inputFluids('minecraft:water 1')
        .duration(200)
    //蒸汽产出加强
    gtr.fluid_heater('rlcyyg:steam_is_my_last_life')
        .circuit(2)
        .inputFluids('minecraft:water 2147483648')
        .outputFluids('gtceu:steam 343597383680')
        .EUt(GTValues.VA[GTValues.ULV])
        .duration(200)
    //鸿蒙之眼集大成配方
    //批处理1024倍
    //集成了来自群友@aach.aic的鸿蒙之眼+
    gtr.compressor('rlcyyg:quantum_chromodynamic_charge_1024')
        .itemInputs('1024x kubejs:quantum_chromodynamic_charge')
        .itemOutputs('disksavior:quantum_chromodynamic_charge_1024')
        .EUt(1)
        .duration(1)
    gtr.cosmos_simulation('rlcyyg:cosmos_simulation_spuer_pro_max_plus_glodversion_1024')
        .itemInputs('disksavior:quantum_chromodynamic_charge_1024')
        .itemOutputs(
            '134217728x gtceu:carbon_dust',
            '134217728x gtceu:phosphorus_dust',
            '134217728x gtceu:sulfur_dust',
            '134217728x gtceu:selenium_dust',
            '134217728x gtceu:iodine_dust',
            '134217728x gtceu:boron_dust',
            '134217728x gtceu:silicon_dust',
            '134217728x gtceu:germanium_dust',
            '134217728x gtceu:arsenic_dust',
            '134217728x gtceu:antimony_dust',
            '134217728x gtceu:tellurium_dust',
            '134217728x gtceu:astatine_dust',
            '134217728x gtceu:aluminium_dust',
            '134217728x gtceu:gallium_dust',
            '134217728x gtceu:indium_dust',
            '134217728x gtceu:tin_dust',
            '134217728x gtceu:thallium_dust',
            '134217728x gtceu:lead_dust',
            '134217728x gtceu:bismuth_dust',
            '134217728x gtceu:polonium_dust',
            '134217728x gtceu:titanium_dust',
            '134217728x gtceu:vanadium_dust',
            '134217728x gtceu:chromium_dust',
            '134217728x gtceu:manganese_dust',
            '134217728x gtceu:iron_dust',
            '134217728x gtceu:cobalt_dust',
            '134217728x gtceu:nickel_dust',
            '134217728x gtceu:copper_dust',
            '134217728x gtceu:zinc_dust',
            '134217728x gtceu:zirconium_dust',
            '134217728x gtceu:niobium_dust',
            '134217728x gtceu:molybdenum_dust',
            '134217728x gtceu:technetium_dust',
            '134217728x gtceu:ruthenium_dust',
            '134217728x gtceu:rhodium_dust',
            '134217728x gtceu:palladium_dust',
            '134217728x gtceu:silver_dust',
            '134217728x gtceu:cadmium_dust',
            '134217728x gtceu:hafnium_dust',
            '134217728x gtceu:tantalum_dust',
            '134217728x gtceu:tungsten_dust',
            '134217728x gtceu:rhenium_dust',
            '134217728x gtceu:osmium_dust',
            '134217728x gtceu:iridium_dust',
            '134217728x gtceu:platinum_dust',
            '134217728x gtceu:gold_dust',
            '134217728x gtceu:beryllium_dust',
            '134217728x gtceu:magnesium_dust',
            '134217728x gtceu:calcium_dust',
            '134217728x gtceu:strontium_dust',
            '134217728x gtceu:barium_dust',
            '134217728x gtceu:radium_dust',
            '134217728x gtceu:yttrium_dust',
            '134217728x gtceu:lithium_dust',
            '134217728x gtceu:sodium_dust',
            '134217728x gtceu:potassium_dust',
            '134217728x gtceu:rubidium_dust',
            '134217728x gtceu:caesium_dust',
            '134217728x gtceu:francium_dust',
            '134217728x gtceu:scandium_dust',
            '134217728x gtceu:actinium_dust',
            '134217728x gtceu:thorium_dust',
            '134217728x gtceu:protactinium_dust',
            '134217728x gtceu:uranium_dust',
            '134217728x gtceu:neptunium_dust',
            '134217728x gtceu:plutonium_dust',
            '134217728x gtceu:americium_dust',
            '134217728x gtceu:curium_dust',
            '134217728x gtceu:berkelium_dust',
            '134217728x gtceu:californium_dust',
            '134217728x gtceu:einsteinium_dust',
            '134217728x gtceu:fermium_dust',
            '134217728x gtceu:mendelevium_dust',
            '134217728x gtceu:nobelium_dust',
            '134217728x gtceu:lawrencium_dust',
            '134217728x gtceu:lanthanum_dust',
            '134217728x gtceu:cerium_dust',
            '134217728x gtceu:praseodymium_dust',
            '134217728x gtceu:neodymium_dust',
            '134217728x gtceu:promethium_dust',
            '134217728x gtceu:samarium_dust',
            '134217728x gtceu:europium_dust',
            '134217728x gtceu:gadolinium_dust',
            '134217728x gtceu:terbium_dust',
            '134217728x gtceu:dysprosium_dust',
            '134217728x gtceu:holmium_dust',
            '134217728x gtceu:erbium_dust',
            '134217728x gtceu:thulium_dust',
            '134217728x gtceu:ytterbium_dust',
            '134217728x gtceu:lutetium_dust',
            '134217728x gtceu:rutherfordium_dust',
            '134217728x gtceu:dubnium_dust',
            '134217728x gtceu:seaborgium_dust',
            '134217728x gtceu:bohrium_dust',
            '134217728x gtceu:hassium_dust',
            '134217728x gtceu:meitnerium_dust',
            '134217728x gtceu:darmstadtium_dust',
            '134217728x gtceu:roentgenium_dust',
            '134217728x gtceu:copernicium_dust',
            '134217728x gtceu:nihonium_dust',
            '134217728x gtceu:flerovium_dust',
            '134217728x gtceu:moscovium_dust',
            '134217728x gtceu:livermorium_dust',
            '134217728x gtceu:tennessine_dust',
            '134217728x gtceu:oganesson_dust',
            '134217728x gtceu:jasper_dust',
            '134217728x gtceu:naquadah_dust',
            '134217728x gtceu:enriched_naquadah_dust',
            '134217728x gtceu:naquadria_dust',
            '134217728x gtceu:duranium_dust',
            '134217728x gtceu:tritanium_dust',
            '134217728x gtceu:mithril_dust',
            '134217728x gtceu:orichalcum_dust',
            '134217728x gtceu:enderium_dust',
            '134217728x gtceu:adamantine_dust',
            '134217728x gtceu:vibranium_dust',
            '134217728x gtceu:infuscolium_dust',
            '134217728x gtceu:taranium_dust',
            '134217728x gtceu:draconium_dust',
            '134217728x gtceu:starmetal_dust',
            //下面的是来自群友@aach.aic 的鸿蒙之眼+，此处已集成
            '16777216x gtceu:white_dwarf_mtter_dust',
            '16777216x gtceu:black_dwarf_mtter_dust',
            '134217728x ae2:sky_dust',
            '134217728x gtceu:trinium_dust',
            '134217728x gtceu:plutonium_241_dust',
            '134217728x gtceu:titanium_50_dust',
            '134217728x gtceu:copper76_dust',
            '134217728x gtceu:uranium_235_dust',
            '134217728x gtceu:perditio_crystal_dust',
            '134217728x gtceu:earth_crystal_dust',
            '134217728x gtceu:ignis_crystal_dust',
            '134217728x gtceu:tartarite_dust',
            '134217728x gtceu:uruium_dust',
            '134217728x gtceu:force_dust',
            '134217728x gtceu:alien_algae_dust',
            '134217728x gtceu:bloodstone_dust',
            '134217728x minecraft:netherite_scrap',
            '134217728x gtceu:purified_tengam_dust',
            '134217728x gtceu:quantanium_dust',
            '134217728x gtceu:bedrock_dust',
            '134217728x gtceu:damascus_steel_dust',
            '134217728x avaritia:neutron_pile',
            '134217728x gtceu:certus_quartz_dust',
            '134217728x ae2:fluix_dust'
        )
        .outputFluids(
            'gtceu:spacetime 262144',
            'gtceu:raw_star_matter_plasma 1342177280',
            'gtceu:quark_gluon_plasma 1342177280',
            'gtceu:heavy_quark_degenerate_matter_plasma 1342177280',
            'gtceu:neutronium 13421772800',
            'gtceu:heavy_lepton_mixture 13421772800',
            'gtceu:hydrogen 134217728000',
            'gtceu:nitrogen 134217728000',
            'gtceu:oxygen 134217728000',
            'gtceu:fluorine 134217728000',
            'gtceu:chlorine 134217728000',
            'gtceu:bromine 134217728000',
            'gtceu:helium 134217728000',
            'gtceu:neon 134217728000',
            'gtceu:argon 134217728000',
            'gtceu:krypton 134217728000',
            'gtceu:xenon 134217728000',
            'gtceu:radon 134217728000',
            'gtceu:mercury 134217728000',
            'gtceu:deuterium 134217728000',
            'gtceu:tritium 134217728000',
            'gtceu:helium_3 134217728000',
            'gtceu:unknowwater 134217728000',
            'gtceu:uu_matter 134217728000'
        )
        .duration(1228800)
        .inputFluids('gtceu:cosmic_element 1048576000')
    /*
    //批处理16384倍
    //集成了来自群友@aach.aic的鸿蒙之眼+
    gtr.cosmos_simulation('rlcyyg:cosmos_simulation_spuer_pro_max_plus_glodversion_16384')
        .itemInputs('16384x kubejs:quantum_chromodynamic_charge')
        .itemOutputs(
            '2147483648x gtceu:carbon_dust',
            '2147483648x gtceu:phosphorus_dust',
            '2147483648x gtceu:sulfur_dust',
            '2147483648x gtceu:selenium_dust',
            '2147483648x gtceu:iodine_dust',
            '2147483648x gtceu:boron_dust',
            '2147483648x gtceu:silicon_dust',
            '2147483648x gtceu:germanium_dust',
            '2147483648x gtceu:arsenic_dust',
            '2147483648x gtceu:antimony_dust',
            '2147483648x gtceu:tellurium_dust',
            '2147483648x gtceu:astatine_dust',
            '2147483648x gtceu:aluminium_dust',
            '2147483648x gtceu:gallium_dust',
            '2147483648x gtceu:indium_dust',
            '2147483648x gtceu:tin_dust',
            '2147483648x gtceu:thallium_dust',
            '2147483648x gtceu:lead_dust',
            '2147483648x gtceu:bismuth_dust',
            '2147483648x gtceu:polonium_dust',
            '2147483648x gtceu:titanium_dust',
            '2147483648x gtceu:vanadium_dust',
            '2147483648x gtceu:chromium_dust',
            '2147483648x gtceu:manganese_dust',
            '2147483648x gtceu:iron_dust',
            '2147483648x gtceu:cobalt_dust',
            '2147483648x gtceu:nickel_dust',
            '2147483648x gtceu:copper_dust',
            '2147483648x gtceu:zinc_dust',
            '2147483648x gtceu:zirconium_dust',
            '2147483648x gtceu:niobium_dust',
            '2147483648x gtceu:molybdenum_dust',
            '2147483648x gtceu:technetium_dust',
            '2147483648x gtceu:ruthenium_dust',
            '2147483648x gtceu:rhodium_dust',
            '2147483648x gtceu:palladium_dust',
            '2147483648x gtceu:silver_dust',
            '2147483648x gtceu:cadmium_dust',
            '2147483648x gtceu:hafnium_dust',
            '2147483648x gtceu:tantalum_dust',
            '2147483648x gtceu:tungsten_dust',
            '2147483648x gtceu:rhenium_dust',
            '2147483648x gtceu:osmium_dust',
            '2147483648x gtceu:iridium_dust',
            '2147483648x gtceu:platinum_dust',
            '2147483648x gtceu:gold_dust',
            '2147483648x gtceu:beryllium_dust',
            '2147483648x gtceu:magnesium_dust',
            '2147483648x gtceu:calcium_dust',
            '2147483648x gtceu:strontium_dust',
            '2147483648x gtceu:barium_dust',
            '2147483648x gtceu:radium_dust',
            '2147483648x gtceu:yttrium_dust',
            '2147483648x gtceu:lithium_dust',
            '2147483648x gtceu:sodium_dust',
            '2147483648x gtceu:potassium_dust',
            '2147483648x gtceu:rubidium_dust',
            '2147483648x gtceu:caesium_dust',
            '2147483648x gtceu:francium_dust',
            '2147483648x gtceu:scandium_dust',
            '2147483648x gtceu:actinium_dust',
            '2147483648x gtceu:thorium_dust',
            '2147483648x gtceu:protactinium_dust',
            '2147483648x gtceu:uranium_dust',
            '2147483648x gtceu:neptunium_dust',
            '2147483648x gtceu:plutonium_dust',
            '2147483648x gtceu:americium_dust',
            '2147483648x gtceu:curium_dust',
            '2147483648x gtceu:berkelium_dust',
            '2147483648x gtceu:californium_dust',
            '2147483648x gtceu:einsteinium_dust',
            '2147483648x gtceu:fermium_dust',
            '2147483648x gtceu:mendelevium_dust',
            '2147483648x gtceu:nobelium_dust',
            '2147483648x gtceu:lawrencium_dust',
            '2147483648x gtceu:lanthanum_dust',
            '2147483648x gtceu:cerium_dust',
            '2147483648x gtceu:praseodymium_dust',
            '2147483648x gtceu:neodymium_dust',
            '2147483648x gtceu:promethium_dust',
            '2147483648x gtceu:samarium_dust',
            '2147483648x gtceu:europium_dust',
            '2147483648x gtceu:gadolinium_dust',
            '2147483648x gtceu:terbium_dust',
            '2147483648x gtceu:dysprosium_dust',
            '2147483648x gtceu:holmium_dust',
            '2147483648x gtceu:erbium_dust',
            '2147483648x gtceu:thulium_dust',
            '2147483648x gtceu:ytterbium_dust',
            '2147483648x gtceu:lutetium_dust',
            '2147483648x gtceu:rutherfordium_dust',
            '2147483648x gtceu:dubnium_dust',
            '2147483648x gtceu:seaborgium_dust',
            '2147483648x gtceu:bohrium_dust',
            '2147483648x gtceu:hassium_dust',
            '2147483648x gtceu:meitnerium_dust',
            '2147483648x gtceu:darmstadtium_dust',
            '2147483648x gtceu:roentgenium_dust',
            '2147483648x gtceu:copernicium_dust',
            '2147483648x gtceu:nihonium_dust',
            '2147483648x gtceu:flerovium_dust',
            '2147483648x gtceu:moscovium_dust',
            '2147483648x gtceu:livermorium_dust',
            '2147483648x gtceu:tennessine_dust',
            '2147483648x gtceu:oganesson_dust',
            '2147483648x gtceu:jasper_dust',
            '2147483648x gtceu:naquadah_dust',
            '2147483648x gtceu:enriched_naquadah_dust',
            '2147483648x gtceu:naquadria_dust',
            '2147483648x gtceu:duranium_dust',
            '2147483648x gtceu:tritanium_dust',
            '2147483648x gtceu:mithril_dust',
            '2147483648x gtceu:orichalcum_dust',
            '2147483648x gtceu:enderium_dust',
            '2147483648x gtceu:adamantine_dust',
            '2147483648x gtceu:vibranium_dust',
            '2147483648x gtceu:infuscolium_dust',
            '2147483648x gtceu:taranium_dust',
            '2147483648x gtceu:draconium_dust',
            '2147483648x gtceu:starmetal_dust',
            //下面的是来自群友@aach.aic 的鸿蒙之眼+，此处已集成
            '268435456x gtceu:white_dwarf_mtter_dust',
            '268435456x gtceu:black_dwarf_mtter_dust',
            '2147483648x ae2:sky_dust',
            '2147483648x gtceu:trinium_dust',
            '2147483648x gtceu:plutonium_241_dust',
            '2147483648x gtceu:titanium_50_dust',
            '2147483648x gtceu:copper76_dust',
            '2147483648x gtceu:uranium_235_dust',
            '2147483648x gtceu:perditio_crystal_dust',
            '2147483648x gtceu:earth_crystal_dust',
            '2147483648x gtceu:ignis_crystal_dust',
            '2147483648x gtceu:tartarite_dust',
            '2147483648x gtceu:uruium_dust',
            '2147483648x gtceu:force_dust',
            '2147483648x gtceu:alien_algae_dust',
            '2147483648x gtceu:bloodstone_dust',
            '2147483648x minecraft:netherite_scrap',
            '2147483648x gtceu:purified_tengam_dust',
            '2147483648x gtceu:quantanium_dust',
            '2147483648x gtceu:bedrock_dust',
            '2147483648x gtceu:damascus_steel_dust',
            '2147483648x avaritia:neutron_pile',
            '2147483648x gtceu:certus_quartz_dust',
            '2147483648x ae2:fluix_dust'
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
    */
    //单步硫酸铀
    gtr.electrolyzer('rlcyyg:uranium_sulfate_waste_solution')
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
    gtr.distort('rlcyyg:adamantine_compounds_dust')
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
    //九倍压缩核废料离心，一号电路
    gtr.centrifuge('rlcyyg:nuclear_waste_9')
        .circuit(1)
        .itemInputs('9x kubejs:nuclear_waste')
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
    gtr.rare_earth_centrifugal('rlcyyg:rec_remember_circuit_1')
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
    gtr.mixer('rlcyyg:wood_distillation')
        .itemInputs(
            '64x gtceu:distillation_tower',
            '32x gtceu:pyrolyse_oven'
        )
        .inputFluids('gtceu:glue 185254')
        .itemOutputs('gtceu:wood_distillation')
        .EUt(GTValues.VA[GTValues.HV])
        .duration(114514)
    //搅拌机合石化工厂
    gtr.mixer('rlcyyg:petrochemical_plant')
        .itemInputs(
            '128x gtceu:distillation_tower',
            '64x gtceu:cracker',
            '16x gtceu:large_chemical_reactor'
        )
        .inputFluids('gtceu:glue 185254')
        .itemOutputs('gtceu:petrochemical_plant')
        .EUt(GTValues.VA[GTValues.HV])
        .duration(114514)
    //大集气加强
    //空气
    gtr.large_gas_collector('rlcyyg:7')
        .notConsumable('kubejs:overworld_data')
        .notConsumable('gtceu:cold_ice_freezer')
        .outputFluids('gtceu:liquid_air 64000000')
        .EUt(GTValues.VA[GTValues.IV])
        .duration(2000)
    //下界空气
    gtr.large_gas_collector('rlcyyg:8')
        .notConsumable('kubejs:nether_data')
        .notConsumable('gtceu:cold_ice_freezer')
        .outputFluids('gtceu:liquid_nether_air 64000000')
        .EUt(GTValues.VA[GTValues.LuV])
        .duration(2000)
    //末地空气
    gtr.large_gas_collector('rlcyyg:9')
        .notConsumable('kubejs:end_data')
        .notConsumable('gtceu:cold_ice_freezer')
        .outputFluids('gtceu:liquid_ender_air 64000000')
        .EUt(GTValues.VA[GTValues.ZPM])
        .duration(2000)
    //巴纳德C空气
    gtr.large_gas_collector('rlcyyg:10')
        .notConsumable('kubejs:barnarda_log')
        .outputFluids('gtceu:barnarda_air 100000')
        .EUt(GTValues.VA[GTValues.IV])
        .duration(200)
    //矿粉还原矿处中间产物
    //闪电处理32号电路
    //晶质铀
    gtr.lightning_processor('rlcyyg:old_1')
        .circuit(32)
        .itemInputs('2x gtceu:uraninite_dust')
        .itemOutputs('gtceu:impure_uraninite_dust')
        .EUt(GTValues.VA[GTValues.ULV])
        .duration(20)
    //黝铜
    gtr.lightning_processor('rlcyyg:old_2')
        .circuit(32)
        .itemInputs('2x gtceu:tetrahedrite_dust')
        .itemOutputs('gtceu:purified_tetrahedrite_ore')
        .EUt(GTValues.VA[GTValues.ULV])
        .duration(20)
    //斑铜
    gtr.lightning_processor('rlcyyg:old_3')
        .circuit(32)
        .itemInputs('2x gtceu:bornite_dust')
        .itemOutputs('gtceu:purified_bornite_ore')
        .EUt(GTValues.VA[GTValues.ULV])
        .duration(20)
    //辉铜
    gtr.lightning_processor('rlcyyg:old_4')
        .circuit(32)
        .itemInputs('2x gtceu:chalcocite_dust')
        .itemOutputs('gtceu:purified_chalcocite_ore')
        .EUt(GTValues.VA[GTValues.ULV])
        .duration(20)
    //谢尔顿
    gtr.lightning_processor('rlcyyg:old_5')
        .circuit(32)
        .itemInputs('2x gtceu:cooperite_dust')
        .itemOutputs('gtceu:purified_cooperite_ore')
        .EUt(GTValues.VA[GTValues.ULV])
        .duration(20)
    //粉直出铂系矿泥
    //黝铜
    gtr.chemical_reactor('rlcyyg:boxi_1')
        .itemInputs('gtceu:tetrahedrite_dust')
        .inputFluids('gtceu:nitric_acid 100')
        .itemOutputs('8x gtceu:platinum_group_sludge_dust')
        .outputFluids('gtceu:sulfuric_copper_solution 1000')
        .EUt(GTValues.VA[GTValues.LV])
        .duration(50)
    //斑铜
    gtr.chemical_reactor('rlcyyg:boxi_2')
        .itemInputs('gtceu:bornite_dust')
        .inputFluids('gtceu:nitric_acid 100')
        .itemOutputs('8x gtceu:platinum_group_sludge_dust')
        .outputFluids('gtceu:sulfuric_copper_solution 1000')
        .EUt(GTValues.VA[GTValues.LV])
        .duration(50)
    //辉铜
    gtr.chemical_reactor('rlcyyg:boxi_3')
        .itemInputs('gtceu:chalcocite_dust')
        .inputFluids('gtceu:nitric_acid 100')
        .itemOutputs('8x gtceu:platinum_group_sludge_dust')
        .outputFluids('gtceu:sulfuric_copper_solution 1000')
        .EUt(GTValues.VA[GTValues.LV])
        .duration(50)
    //谢尔顿
    gtr.chemical_reactor('rlcyyg:boxi_4')
        .itemInputs('gtceu:cooperite_dust')
        .inputFluids('gtceu:nitric_acid 100')
        .itemOutputs('16x gtceu:platinum_group_sludge_dust')
        .outputFluids('gtceu:sulfuric_nickel_solution 1000')
        .EUt(GTValues.VA[GTValues.LV])
        .duration(50)
    //一些去除维度限制的配方
    //大马士革钢
    gtr.chemical_bath('rlcyyg:fd_dsd')
        .itemInputs('gtceu:steel_dust')
        .inputFluids('gtceu:lubricant 100')
        .itemOutputs('gtceu:damascus_steel_dust')
        .EUt(GTValues.VA[GTValues.LV])
        .duration(200)
    //主世界数据
    gtr.world_data_scanner('rlcyyg:fd_o')
        .circuit(2)
        .itemInputs(
            '64x gtceu:stone_dust',
            'gtceu:data_stick'
        )
        .inputFluids(
            'gtceu:pcb_coolant 100',
            'gtceu:air 64000'
        )
        .itemOutputs('kubejs:overworld_data')
        .EUt(GTValues.VA[GTValues.ULV])
        .duration(20)
    //下界数据
    gtr.world_data_scanner('rlcyyg:fd_n')
        .circuit(2)
        .itemInputs(
            '64x gtceu:netherrack_dust',
            '2x gtceu:data_stick'
        )
        .inputFluids(
            'gtceu:pcb_coolant 100',
            'gtceu:nether_air 64000'
        )
        .itemOutputs('kubejs:nether_data')
        .EUt(GTValues.VA[GTValues.ULV])
        .duration(20)
    //末地数据
    gtr.world_data_scanner('rlcyyg:fd_e')
        .circuit(2)
        .itemInputs(
            '64x gtceu:endstone_dust',
            '4x gtceu:data_stick'
        )
        .inputFluids(
            'gtceu:pcb_coolant 100',
            'gtceu:ender_air 64000'
        )
        .itemOutputs('kubejs:end_data')
        .EUt(GTValues.VA[GTValues.ULV])
        .duration(20)
    //流体钻机电解
    //————————————————————————————————————————————————————————————————————————————————mv
    //主世界
    gtr.electrolyzer('rlcyyg:mv_t0')
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
    gtr.electrolyzer('rlcyyg:mv_t1')
        .notConsumable('1024x gtceu:mv_fluid_drilling_rig')
        .notConsumable('ad_astra:moon_stone')
        .outputFluids(
            'gtceu:helium_3 153600',
            'gtceu:helium 307200'
        )
        .EUt(GTValues.VA[GTValues.HV])
        .duration(200)
    //火星
    gtr.electrolyzer('rlcyyg:mv_t2')
        .notConsumable('1024x gtceu:mv_fluid_drilling_rig')
        .notConsumable('ad_astra:mars_stone')
        .outputFluids(
            'gtceu:radon 307200'
        )
        .EUt(GTValues.VA[GTValues.HV])
        .duration(200)
    //金星
    gtr.electrolyzer('rlcyyg:mv_t3_1')
        .notConsumable('1024x gtceu:mv_fluid_drilling_rig')
        .notConsumable('ad_astra:venus_stone')
        .outputFluids(
            'gtceu:sulfuric_acid 307200'
        )
        .EUt(GTValues.VA[GTValues.HV])
        .duration(200)
    //水星
    gtr.electrolyzer('rlcyyg:mv_t3_2')
        .notConsumable('1024x gtceu:mv_fluid_drilling_rig')
        .notConsumable('ad_astra:mercury_stone')
        .outputFluids(
            'gtceu:deuterium 230400'
        )
        .EUt(GTValues.VA[GTValues.HV])
        .duration(200)
    //下界
    gtr.electrolyzer('rlcyyg:mv_t3_3')
        .notConsumable('1024x gtceu:mv_fluid_drilling_rig')
        .notConsumable('minecraft:netherrack')
        .outputFluids(
            'minecraft:lava 998400',
            'gtceu:natural_gas 537600'
        )
        .EUt(GTValues.VA[GTValues.HV])
        .duration(200)
    //谷神星
    gtr.electrolyzer('rlcyyg:mv_t4')
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
    gtr.electrolyzer('rlcyyg:mv_t5_1')
        .notConsumable('1024x gtceu:mv_fluid_drilling_rig')
        .notConsumable('kubejs:iostone')
        .outputFluids(
            'gtceu:coal_gas 307200'
        )
        .EUt(GTValues.VA[GTValues.HV])
        .duration(200)
    //木卫三
    gtr.electrolyzer('rlcyyg:mv_t5_2')
        .notConsumable('1024x gtceu:mv_fluid_drilling_rig')
        .notConsumable('kubejs:ganymedestone')
        .outputFluids(
            'gtceu:hydrochloric_acid 307200'
        )
        .EUt(GTValues.VA[GTValues.HV])
        .duration(200)
    //冥王星
    gtr.electrolyzer('rlcyyg:mv_t6_1')
        .notConsumable('1024x gtceu:mv_fluid_drilling_rig')
        .notConsumable('kubejs:plutostone')
        .outputFluids(
            'gtceu:nitric_acid 307200'
        )
        .EUt(GTValues.VA[GTValues.HV])
        .duration(200)
    //土卫二
    gtr.electrolyzer('rlcyyg:mv_t6_2')
        .notConsumable('1024x gtceu:mv_fluid_drilling_rig')
        .notConsumable('kubejs:enceladusstone')
        .outputFluids(
            'gtceu:chlorine 307200',
            'gtceu:fluorine 153600'
        )
        .EUt(GTValues.VA[GTValues.HV])
        .duration(200)
    //土卫六
    gtr.electrolyzer('rlcyyg:mv_t6_3')
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
    gtr.electrolyzer('rlcyyg:mv_t8')
        .notConsumable('1024x gtceu:mv_fluid_drilling_rig')
        .notConsumable('kubejs:barnarda_log')
        .outputFluids(
            'gtceu:unknowwater 307200'
        )
        .EUt(GTValues.VA[GTValues.HV])
        .duration(200)
    //————————————————————————————————————————————————————————————————————————————————hv
    //主世界
    gtr.electrolyzer('rlcyyg:hv_t0')
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
    gtr.electrolyzer('rlcyyg:hv_t1')
        .notConsumable('1024x gtceu:hv_fluid_drilling_rig')
        .notConsumable('ad_astra:moon_stone')
        .outputFluids(
            'gtceu:helium_3 2457600',
            'gtceu:helium 4915200'
        )
        .EUt(GTValues.VA[GTValues.EV])
        .duration(200)
    //火星
    gtr.electrolyzer('rlcyyg:hv_t2')
        .notConsumable('1024x gtceu:hv_fluid_drilling_rig')
        .notConsumable('ad_astra:mars_stone')
        .outputFluids(
            'gtceu:radon 4915200'
        )
        .EUt(GTValues.VA[GTValues.EV])
        .duration(200)
    //金星
    gtr.electrolyzer('rlcyyg:hv_t3_1')
        .notConsumable('1024x gtceu:hv_fluid_drilling_rig')
        .notConsumable('ad_astra:venus_stone')
        .outputFluids(
            'gtceu:sulfuric_acid 4915200'
        )
        .EUt(GTValues.VA[GTValues.EV])
        .duration(200)
    //水星
    gtr.electrolyzer('rlcyyg:hv_t3_2')
        .notConsumable('1024x gtceu:hv_fluid_drilling_rig')
        .notConsumable('ad_astra:mercury_stone')
        .outputFluids(
            'gtceu:deuterium 3686400'
        )
        .EUt(GTValues.VA[GTValues.EV])
        .duration(200)
    //下界
    gtr.electrolyzer('rlcyyg:hv_t3_3')
        .notConsumable('1024x gtceu:hv_fluid_drilling_rig')
        .notConsumable('minecraft:netherrack')
        .outputFluids(
            'minecraft:lava 15974400',
            'gtceu:natural_gas 8601600'
        )
        .EUt(GTValues.VA[GTValues.EV])
        .duration(200)
    //谷神星
    gtr.electrolyzer('rlcyyg:hv_t4')
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
    gtr.electrolyzer('rlcyyg:hv_t5_1')
        .notConsumable('1024x gtceu:hv_fluid_drilling_rig')
        .notConsumable('kubejs:iostone')
        .outputFluids(
            'gtceu:coal_gas 4915200'
        )
        .EUt(GTValues.VA[GTValues.EV])
        .duration(200)
    //木卫三
    gtr.electrolyzer('rlcyyg:hv_t5_2')
        .notConsumable('1024x gtceu:hv_fluid_drilling_rig')
        .notConsumable('kubejs:ganymedestone')
        .outputFluids(
            'gtceu:hydrochloric_acid 4915200'
        )
        .EUt(GTValues.VA[GTValues.EV])
        .duration(200)
    //冥王星
    gtr.electrolyzer('rlcyyg:hv_t6_1')
        .notConsumable('1024x gtceu:hv_fluid_drilling_rig')
        .notConsumable('kubejs:plutostone')
        .outputFluids(
            'gtceu:nitric_acid 4915200'
        )
        .EUt(GTValues.VA[GTValues.EV])
        .duration(200)
    //土卫二
    gtr.electrolyzer('rlcyyg:hv_t6_2')
        .notConsumable('1024x gtceu:hv_fluid_drilling_rig')
        .notConsumable('kubejs:enceladusstone')
        .outputFluids(
            'gtceu:chlorine 4915200',
            'gtceu:fluorine 2457600'
        )
        .EUt(GTValues.VA[GTValues.EV])
        .duration(200)
    //土卫六
    gtr.electrolyzer('rlcyyg:hv_t6_3')
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
    gtr.electrolyzer('rlcyyg:hv_t8')
        .notConsumable('1024x gtceu:hv_fluid_drilling_rig')
        .notConsumable('kubejs:barnarda_log')
        .outputFluids(
            'gtceu:unknowwater 4915200'
        )
        .EUt(GTValues.VA[GTValues.EV])
        .duration(200)
    //————————————————————————————————————————————————————————————————————————————————ev
    //主世界
    gtr.electrolyzer('rlcyyg:ev_t0')
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
    gtr.electrolyzer('rlcyyg:ev_t1')
        .notConsumable('1024x gtceu:ev_fluid_drilling_rig')
        .notConsumable('ad_astra:moon_stone')
        .outputFluids(
            'gtceu:helium_3 9830400',
            'gtceu:helium 19660800'
        )
        .EUt(GTValues.VA[GTValues.IV])
        .duration(200)
    //火星
    gtr.electrolyzer('rlcyyg:ev_t2')
        .notConsumable('1024x gtceu:ev_fluid_drilling_rig')
        .notConsumable('ad_astra:mars_stone')
        .outputFluids(
            'gtceu:radon 19660800'
        )
        .EUt(GTValues.VA[GTValues.IV])
        .duration(200)
    //金星
    gtr.electrolyzer('rlcyyg:ev_t3_1')
        .notConsumable('1024x gtceu:ev_fluid_drilling_rig')
        .notConsumable('ad_astra:venus_stone')
        .outputFluids(
            'gtceu:sulfuric_acid 19660800'
        )
        .EUt(GTValues.VA[GTValues.IV])
        .duration(200)
    //水星
    gtr.electrolyzer('rlcyyg:ev_t3_2')
        .notConsumable('1024x gtceu:ev_fluid_drilling_rig')
        .notConsumable('ad_astra:mercury_stone')
        .outputFluids(
            'gtceu:deuterium 14745600'
        )
        .EUt(GTValues.VA[GTValues.IV])
        .duration(200)
    //下界
    gtr.electrolyzer('rlcyyg:ev_t3_3')
        .notConsumable('1024x gtceu:ev_fluid_drilling_rig')
        .notConsumable('minecraft:netherrack')
        .outputFluids(
            'minecraft:lava 63897600',
            'gtceu:natural_gas 34406400'
        )
        .EUt(GTValues.VA[GTValues.IV])
        .duration(200)
    //谷神星
    gtr.electrolyzer('rlcyyg:ev_t4')
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
    gtr.electrolyzer('rlcyyg:ev_t5_1')
        .notConsumable('1024x gtceu:ev_fluid_drilling_rig')
        .notConsumable('kubejs:iostone')
        .outputFluids(
            'gtceu:coal_gas 19660800'
        )
        .EUt(GTValues.VA[GTValues.IV])
        .duration(200)
    //木卫三
    gtr.electrolyzer('rlcyyg:ev_t5_2')
        .notConsumable('1024x gtceu:ev_fluid_drilling_rig')
        .notConsumable('kubejs:ganymedestone')
        .outputFluids(
            'gtceu:hydrochloric_acid 19660800'
        )
        .EUt(GTValues.VA[GTValues.IV])
        .duration(200)
    //冥王星
    gtr.electrolyzer('rlcyyg:ev_t6_1')
        .notConsumable('1024x gtceu:ev_fluid_drilling_rig')
        .notConsumable('kubejs:plutostone')
        .outputFluids(
            'gtceu:nitric_acid 19660800'
        )
        .EUt(GTValues.VA[GTValues.IV])
        .duration(200)
    //土卫二
    gtr.electrolyzer('rlcyyg:ev_t6_2')
        .notConsumable('1024x gtceu:ev_fluid_drilling_rig')
        .notConsumable('kubejs:enceladusstone')
        .outputFluids(
            'gtceu:chlorine 19660800',
            'gtceu:fluorine 9830400'
        )
        .EUt(GTValues.VA[GTValues.IV])
        .duration(200)
    //土卫六
    gtr.electrolyzer('rlcyyg:ev_t6_3')
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
    gtr.electrolyzer('rlcyyg:ev_t8')
        .notConsumable('1024x gtceu:ev_fluid_drilling_rig')
        .notConsumable('kubejs:barnarda_log')
        .outputFluids(
            'gtceu:unknowwater 19660800'
        )
        .EUt(GTValues.VA[GTValues.IV])
        .duration(200)
    //————————————————————————————————————————————————————————————————————————————————zpm
    //主世界
    gtr.electrolyzer('rlcyyg:zpm_t0')
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
    gtr.electrolyzer('rlcyyg:zpm_t1')
        .notConsumable('1024x gtceu:zpm_fluid_drilling_rig')
        .notConsumable('ad_astra:moon_stone')
        .outputFluids(
            'gtceu:helium_3 629145600',
            'gtceu:helium 1258291200'
        )
        .EUt(GTValues.VA[GTValues.UV])
        .duration(200)
    //火星
    gtr.electrolyzer('rlcyyg:zpm_t2')
        .notConsumable('1024x gtceu:zpm_fluid_drilling_rig')
        .notConsumable('ad_astra:mars_stone')
        .outputFluids(
            'gtceu:radon 1258291200'
        )
        .EUt(GTValues.VA[GTValues.UV])
        .duration(200)
    //金星
    gtr.electrolyzer('rlcyyg:zpm_t3_1')
        .notConsumable('1024x gtceu:zpm_fluid_drilling_rig')
        .notConsumable('ad_astra:venus_stone')
        .outputFluids(
            'gtceu:sulfuric_acid 1258291200'
        )
        .EUt(GTValues.VA[GTValues.UV])
        .duration(200)
    //水星
    gtr.electrolyzer('rlcyyg:zpm_t3_2')
        .notConsumable('1024x gtceu:zpm_fluid_drilling_rig')
        .notConsumable('ad_astra:mercury_stone')
        .outputFluids(
            'gtceu:deuterium 943718400'
        )
        .EUt(GTValues.VA[GTValues.UV])
        .duration(200)
    //下界
    gtr.electrolyzer('rlcyyg:zpm_t3_3')
        .notConsumable('1024x gtceu:zpm_fluid_drilling_rig')
        .notConsumable('minecraft:netherrack')
        .outputFluids(
            'minecraft:lava 4089446400',
            'gtceu:natural_gas 2202009600'
        )
        .EUt(GTValues.VA[GTValues.UV])
        .duration(200)
    //谷神星
    gtr.electrolyzer('rlcyyg:zpm_t4')
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
    gtr.electrolyzer('rlcyyg:zpm_t5_1')
        .notConsumable('1024x gtceu:zpm_fluid_drilling_rig')
        .notConsumable('kubejs:iostone')
        .outputFluids(
            'gtceu:coal_gas 1258291200'
        )
        .EUt(GTValues.VA[GTValues.UV])
        .duration(200)
    //木卫三
    gtr.electrolyzer('rlcyyg:zpm_t5_2')
        .notConsumable('1024x gtceu:zpm_fluid_drilling_rig')
        .notConsumable('kubejs:ganymedestone')
        .outputFluids(
            'gtceu:hydrochloric_acid 1258291200'
        )
        .EUt(GTValues.VA[GTValues.UV])
        .duration(200)
    //冥王星
    gtr.electrolyzer('rlcyyg:zpm_t6_1')
        .notConsumable('1024x gtceu:zpm_fluid_drilling_rig')
        .notConsumable('kubejs:plutostone')
        .outputFluids(
            'gtceu:nitric_acid 1258291200'
        )
        .EUt(GTValues.VA[GTValues.UV])
        .duration(200)
    //土卫二
    gtr.electrolyzer('rlcyyg:zpm_t6_2')
        .notConsumable('1024x gtceu:zpm_fluid_drilling_rig')
        .notConsumable('kubejs:enceladusstone')
        .outputFluids(
            'gtceu:chlorine 1258291200',
            'gtceu:fluorine 629145600'
        )
        .EUt(GTValues.VA[GTValues.UV])
        .duration(200)
    //土卫六
    gtr.electrolyzer('rlcyyg:zpm_t6_3')
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
    gtr.electrolyzer('rlcyyg:zpm_t8')
        .notConsumable('1024x gtceu:zpm_fluid_drilling_rig')
        .notConsumable('kubejs:barnarda_log')
        .outputFluids(
            'gtceu:unknowwater 1258291200'
        )
        .EUt(GTValues.VA[GTValues.UV])
        .duration(200)
})