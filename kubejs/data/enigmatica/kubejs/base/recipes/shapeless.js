events.listen('recipes', function (event) {
    var recipes = [
        shapelessRecipe('botania:enchanted_soil', ['minecraft:grass_block', 'botania:overgrowth_seed']),
        shapelessRecipe('minecraft:sticky_piston', ['minecraft:piston', '#forge:slimeballs']),
        shapelessRecipe('minecraft:flint', ['#forge:gravel', '#forge:gravel', '#forge:gravel']),
        shapelessRecipe('simplefarming:cornbread', ['#forge:grain', '#forge:crops/corn', '#forge:grain']),
        shapelessRecipe('minecraft:chest', ['#forge:chests/wooden']),
        // shapelessRecipe('minecraft:crafting_table', [
        //     'craftingstation:crafting_station_slab',
        //     'craftingstation:crafting_station_slab'
        // ]),
        shapelessRecipe('simplefarming:fish_sandwich', [
            '#forge:bread',
            'aquaculture:fish_fillet_cooked',
            'aquaculture:fish_fillet_cooked',
            '#forge:crops/tomato',
            '#forge:salad_ingredients'
        ]),
        shapelessRecipe('simplefarming:sushi', [
            '#forge:grain',
            'minecraft:dried_kelp',
            'aquaculture:fish_fillet_raw',
            'aquaculture:fish_fillet_raw'
        ]),
        shapelessRecipe('simplefarming:fish_fillet', [
            '#forge:grain',
            '#forge:grain',
            'aquaculture:fish_fillet_cooked',
            'aquaculture:fish_fillet_cooked'
        ]),
        // shapelessRecipe('tetra:magmatic_cell', [
        //     { item: 'tetra:magmatic_cell', nbt: { Damage: 128 } },
        //     'powah:capacitor_blazing',
        //     'powah:capacitor_blazing'
        // ]),
        shapelessRecipe(item.of('additionalbars:crossed_iron_bars', 9), [
            'minecraft:iron_bars',
            'minecraft:iron_bars',
            'minecraft:iron_bars',
            'minecraft:iron_bars',
            'minecraft:iron_bars',
            'minecraft:iron_bars',
            'minecraft:iron_bars',
            'minecraft:iron_bars',
            'minecraft:iron_bars'
        ]),
        shapelessRecipe('minecraft:wheat_seeds', ['minecraft:wheat']),
        shapelessRecipe('quark:root', ['minecraft:vine', '#forge:dyes/brown']),
        shapelessRecipe(item.of('patchouli:guide_book', { 'patchouli:book': 'patchouli:modded_for_dummies' }), [
            'minecraft:book',
            '#forge:dyes/yellow'
        ]),
        shapelessRecipe('appliedenergistics2:quartz_fixture', [
            '#forge:gems/charged_certus_quartz',
            '#forge:ingots/iron'
        ]),
        shapelessRecipe('appliedenergistics2:ender_dust', ['emendatusenigmatica:dust_ender']),
        shapelessRecipe('emendatusenigmatica:dust_ender', ['appliedenergistics2:ender_dust']),
        shapelessRecipe('appliedenergistics2:charged_certus_quartz_crystal', [
            'emendatusenigmatica:gem_charged_certus_quartz'
        ]),
        shapelessRecipe('emendatusenigmatica:gem_charged_certus_quartz', [
            'appliedenergistics2:charged_certus_quartz_crystal'
        ]),
        shapelessRecipe('appliedenergistics2:certus_quartz_crystal', ['emendatusenigmatica:gem_certus_quartz']),
        shapelessRecipe('emendatusenigmatica:gem_certus_quartz', ['appliedenergistics2:certus_quartz_crystal']),
        shapelessRecipe(item.of('emendatusenigmatica:ingot_steel', 2), [
            'immersiveengineering:ingot_steel',
            'immersiveengineering:ingot_steel'
        ]),
        shapelessRecipe(item.of('immersiveengineering:ingot_steel', 2), [
            'mekanism:ingot_steel',
            'mekanism:ingot_steel'
        ]),
        shapelessRecipe(item.of('mekanism:ingot_steel', 2), [
            'emendatusenigmatica:ingot_steel',
            'emendatusenigmatica:ingot_steel'
        ])
    ];

    recipes.forEach(function (recipe) {
        event.shapeless(recipe.result, recipe.ingredients);
    });
});
