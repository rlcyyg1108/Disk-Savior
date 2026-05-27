//全局变量
if (!global.disksavior) global.disksavior = {}

if (!global.disksavior.enable) global.disksavior.enable = {}//功能开关

global.disksavior.enable.master = true//用于给其他脚本做检测
global.disksavior.enable.otherone = false//是否开启集成其他人脚本的脚本

if (!global.disksavior.batch_multiplier) global.disksavior.batch_multiplier = {}//批处理乘数
global.disksavior.batch_multiplier.fdr = 64//流体钻机电解
global.disksavior.batch_multiplier.pv = 1//虚空矿机电解
global.disksavior.batch_multiplier.lvm = 1//大型虚空矿机电解
global.disksavior.batch_multiplier.gc = 1//集气电解
global.disksavior.batch_multiplier.cs = 16384//化反鸿蒙







//注册
StartupEvents.registry('item', event => {
    event.create('disksavior:quantum_chromodynamic_charge_super')
        .displayName('极高密度量子色动力学爆弹')
        .texture('disksavior:item/quantum_chromodynamic_charge_super')
    event.create('disksavior:steam_1')
        .displayName('蒸汽基础')
        .texture('disksavior:item/steam_is_my_last_life')
    event.create('disksavior:steam_2')
        .displayName('蒸汽少侠')
        .texture('disksavior:item/steam_is_my_last_life')
    event.create('disksavior:steam_3')
        .displayName('蒸汽大侠')
        .texture('disksavior:item/steam_is_my_last_life')
    event.create('disksavior:steam_4')
        .displayName('蒸汽巨侠')
        .texture('disksavior:item/steam_is_my_last_life')
    event.create('disksavior:steam_is_my_last_life')
        .displayName('此身定为蒸汽所天成')
        .texture('disksavior:item/steam_is_my_last_life')
    event.create('disksavior:show')
        .displayName('示例物品')
        .texture('disksavior:item/show')
    event.create('disksavior:lecb')
        .displayName('青色大脑')
        .texture('disksavior:item/lecb')
})