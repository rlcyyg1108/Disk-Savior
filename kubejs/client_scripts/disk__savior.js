// 优先级设高，确保变量优先加载
priority: 1000

// 生成仅包含单一类型(Item或Fluid)的元件包
const packed_infinity_cell = (cellname, type, list) => {
    // 使用 Array.map 生成 key 字符串，避免手动循环拼接出错
    let keysNBT = list.map(id => {
        return `{
            "#c": "ae2:i",
            id: "expatternprovider:infinity_cell",
            tag: {
                record: {
                    "#c": "ae2:${type}",
                    id: "${id}"
                }
            }
        }`
    }).join(",")

    // 生成 amounts 数组 [1L, 1L, ...]
    let amtsNBT = list.map(() => "1L").join(",")

    // 手动转义 Name JSON，确保引号正确
    let nameJson = JSON.stringify({ text: cellname }) // 输出 '{"text":"名字"}'

    let finalNBT = `{
        RepairCost: 0,
        amts: [L;${amtsNBT}],
        display: {Name: '${nameJson}'},
        ic: ${list.length}L,
        internalCurrentPower: 20000.0d,
        keys: [${keysNBT}]
    }`

    return Item.of('ae2:portable_item_cell_16k', finalNBT)
}

// 生成混合类型(Item + Fluid)的元件包 (鸿蒙元件包专用)
const packed_infinity_cell_if = (cellname, list1, list2) => {
    let totalLength = list1.length + list2.length

    // 处理 List 1 (Items)
    let keys1 = list1.map(id => {
        return `{
            "#c": "ae2:i",
            id: "expatternprovider:infinity_cell",
            tag: {
                record: {
                    "#c": "ae2:i",
                    id: "${id}"
                }
            }
        }`
    })

    // 处理 List 2 (Fluids)
    let keys2 = list2.map(id => {
        return `{
            "#c": "ae2:i",
            id: "expatternprovider:infinity_cell",
            tag: {
                record: {
                    "#c": "ae2:f",
                    id: "${id}"
                }
            }
        }`
    })

    let allKeys = keys1.concat(keys2).join(",")
    let amtsNBT = Array(totalLength).fill("1L").join(",")
    let nameJson = JSON.stringify({ text: cellname })

    let finalNBT = `{
        RepairCost: 0,
        amts: [L;${amtsNBT}],
        display: {Name: '${nameJson}'},
        ic: ${totalLength}L,
        internalCurrentPower: 20000.0d,
        keys: [${allKeys}]
    }`

    return Item.of('ae2:portable_item_cell_16k', finalNBT)
}

// ==========================================
// 3. JEI 注册 Subtypes (核心修复)
// ==========================================
// 这一步告诉 JEI：不要把所有 AE 硬盘当成同一个东西！
JEIEvents.subtypes(event => {
    // 注册便携元件的 NBT 判定，确保 JEI 能识别内部数据的区别
    event.useNBT('ae2:portable_item_cell_16k')
    event.useNBT('expatternprovider:infinity_cell')
})

// ==========================================
// 4. JEI 添加物品
// ==========================================
JEIEvents.addItems(event => {
    console.log('正在向 JEI 注册自定义 AE 元件包...')
    // --- 注册单个无限单元 ---
    const simpleItems = ['gtceu:turbine_rotor']
    simpleItems.forEach(id => event.add(Item.of('expatternprovider:infinity_cell', '{record:{"#c":"ae2:i",id:"' + id + '"}}')))
    //染料元件包
    event.add(packed_infinity_cell('染料元件包', 'f', ['gtceu:black_dye', 'gtceu:blue_dye', 'gtceu:brown_dye', 'gtceu:cyan_dye', 'gtceu:gray_dye', 'gtceu:green_dye', 'gtceu:light_blue_dye', 'gtceu:lime_dye', 'gtceu:magenta_dye', 'gtceu:orange_dye', 'gtceu:pink_dye', 'gtceu:purple_dye', 'gtceu:red_dye', 'gtceu:white_dye', 'gtceu:yellow_dye', 'gtceu:light_gray_dye']))
})