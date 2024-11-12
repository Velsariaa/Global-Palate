import React, { createContext } from 'react';

export const ValuesContext = createContext();
export const ValuesProvider = ({ children }) => {

    const values = {

        'Dish1': [require('./assets/tinola.jpg'), 'Tinola', 'Filipino', '30', 'Easy', '2',
        ['○ 1 tablespoon cooking oil\n\n○ 1 pc onion, small -sized, chopped\n\n○ 2 cloves garlic, chopped',
        '\n\n○ 1 pc ginger, cut into strips\n\n○ ½ kilo chicken, cut into 8 pcs\n\n○ 4 cups water\n\n○ 2 pcs Knorr chicken cubes\n\n○ 1 pc chayote or 1 pc small - sized green papaya, sliced',
        '\n\n○ 2 stalks moringa leaves'], 
        ['➊ Get a pot and bring it up to medium heat before pouring in the oil. Drop in the onions, garlic and ginger and sauté slowly for about 2 minutes or until you can smell the lovely aroma.',
        '\n\n➋ It’s time to drop in the chicken pieces and stir until it turns white or light brown in color.',
        '\n\n➌ Pour in the water and add your Knorr Chicken Broth cubes. Bring this to a simmer until chicken is tender and cooked through.',
        '\n\n➍ You can now add your sayote or green papaya and cook until tender.',
        '\n\n➎ Dahon ng sili is added at the last stage to ensure leaves (and nutrients) don’t dry up. Give this a minute then it is done. Malunggay is also another healthy alternative because it is packed with vitamins and minerals which are good for nursing moms and kids as well.',
        '\n\n➏ Enjoy this with patis and calamansi on the side. See the faces of your whole family light up as you bring this to the table.\n\n\n\n\n'],
        'pEMMBceYyMw'
        ],

        'Dish2': [require('./assets/bikol.jpg'), 'Crunchy Bicol Express', 'Filipino', '30 minutes', 'Easy', '3',
            ["○ 1/2 kg pork belly, sliced\n\n○ water, to cover\n\n○ 1 pc Knorr Pork Cubes\n\n○ oil for frying\n\n○ 2 tbsp oil\n\n○ 2 tbsp bagoong or shrimp paste\n\n○ red and green chilies, chopped as needed", 
            "\n\n○ 1 (29 g) pack Knorr Ginataang Gulay Mix, dissolved in 240 ml water"],   
            ["➊ If you want to have an amazing and crispy pork belly, you need to boil the pork in water with Knorr Pork Cubes first. Now, allow this to simmer over low heat until the pork is tender.\n\n",     
            "➋ Deep-fry the pork belly only when it has been thoroughly drained, and its surfaces are dry. You can pat dry with paper towels. Otherwise, when you place it in hot oil, the oil will splatter and might burn your skin.\n\n" +
            "➌ For the next step, prepare a plate or tray lined with paper towels so you can place the cooked fried belly on top. The paper towel will absorb the excess oil from the pork.\n\n" +
            "➍ Now, we can start preparing our sauce. Get your pan nice and hot over medium-high heat. Then, pour some oil and gently sauté the bagoong and chilies for 2 minutes.\n\n" +
            "➎ Add Knorr Complete Recipe Mix Ginataang Gulay dissolved in water. Let this simmer until thick.\n\n" +
            "➏ When your family sees a plate full of fried pork topped with some spicy gata sauce, they will not be able to contain their excitement! Get your camera phone ready because you’ll want to capture their happy.\n\n\n\n\n"],
            'd1LUrsOU5M8'
        ],

        'Dish3': [require('./assets/carbonara.jpg'), 'Creamy Carbonara', 'Italian', '40', 'Easy', '4',
        ['○ 300 g spaghetti',
        '\n\n○ 12 strips of bacon, cut into ½ cm slices',
        '\n\n○ 1 tablespoon butter',
        '\n\n○ 2 cloves garlic, finely chopped',
        '\n\n○ ½ cup button mushrooms or enoki mushroom',
        '\n\n○ ¼ cup all-purpose flour',
        '\n\n○ 1 (68g) pack Knorr Cream of Mushroom dissolved in 3 cups of water',
        '\n\n○ 1 cup all-purpose cream',
        '\n\n○ Optional: 30 g spinach leaves picked',
        '\n\n○ salt and pepper to taste',
        '\n\n○ grated Parmesan Cheese', 
        ],

        ['➊ Cook pasta according to package directions. Drain well and set aside.',
        '\n\n➋ In a pan, cook the bacon until crispy and set aside.',
        '\n\n➌ Using the same pan, add the butter and sauté the garlic until light brown. Add sliced mushrooms and all-purpose flour. Mix well.',
        '\n\n➍ Add dissolved Knorr Cream of Mushroom Soup and allow to simmer until slightly thick.',
        '\n\n➎ You may add spinach leaves at this point. Add the all-purpose cream—season with salt and pepper to taste. Mix well. Do not simmer or boil, as the cream will curdle. Turn off the heat and toss in the cooked pasta.',
        '\n\n➏ Arrange the pasta on a plate, then top with crispy bacon and Parmesan cheese.\n\n\n\n\n'],
        '78nzrhpRg1g'
        ],


        'Dish4': [require('./assets/ginataan.jpg'), 'Ginataang Gulay', 'Filipino', '20', 'Easy', '6',
        ['○ 1 tbsp cooking oil',
        '\n\n○ 1/2 pc onion, chopped',
        '\n\n○ 1 clove garlic, chopped',
        '\n\n○ 1/4 pc kalabasa, peeled and cubed',
        '\n\n○ 1/2 bunch sitaw, sliced into 2 inches long',
        '\n\n○ 1 (29 g) pack Knorr Ginataang Gulay Mix, dissolved in 1 cup water',
        '\n\n○ 1 pc small small green siling haba, sliced',
        '\n\n○ 1 cup all-purpose cream',
        '\n\n○ Optional: 30 g spinach leaves picked',
        '\n\n○ Optional: 1 cup malunggay leaves',
        '\n\n○ 1/4 cup shrimp, peeled', 
        ],

	    ['➊ Begin by getting your pan nice and hot over medium heat. Pour some oil and throw in the onion and garlic. Cook until the onion is soft and the garlic is golden brown.',
        '\n\n➋ Gently add the kalabasa and sitaw and pour in the dissolved Knorr Complete Recipe Mix and siling haba. Stir well and cover until the vegetables are half cooked.',
        '\n\n➌ Throw in the malunggay leaves and shrimps and then continue to simmer until kalabasa and shrimps are fully cooked. And there you have it!',
        '\n\n➍ Ginataang Gulay is the perfect complement to any of your favourite dishes. You can simply have it as is. Like home, it’s a comfort dish!\n\n\n\n\n'],
        'tdrNMVM-0bY'
        ],

        'Dish5': [require('./assets/springrolls.jpg'), 'Spring Rolls (春卷)', 'Chinese', '45', 'Easy', '15',
        ['○ For the wrappers',
        '\n\n○ 15 large flour-based sprill roll wrappers (25 x 25 cm / 10 x 10 inches)',
        '\n\n○ For the filling',
        '\n\n○ 200 grams minced pork',
        '\n\n○ 120 grams shrimp, shelled and cubed',
        '\n\n○ 130 grams bean sprouts',
        '\n\n○ 100 grams Chinese chives, cut into sections or finely shredded cabbage',
        '\n\n○ 26 shiitake mushrooms - thinly sliced (rehydrate beforehand if using dried ones)',
        '\n\n○ 2 stalks scallions, finely chopped',
        '\n\n○ 100 g dried mung bean vermicelli, rehydrated and cut into sections',
        '\n\n○ 2 eggs', 
        '\n\n○ For the seasoning',
        '\n\n○ 2 tablespoon oyster sauce',
        '\n\n○ 1 teaspoon sesame oil',
        '\n\n○ ½ teaspoon salt',
        '\n\n○ ½ teaspoon sugar',
        '\n\n○ ¼ teaspoon ground white or black pepper',
        '\n\n○ For frying',
        '\n\n○ Cooking oil for deep frying or air-frying',
        '\n\n○ For the dipping sauce (optional)',
        '\n\n○ 2 tablespoon white rice vinegar (or fresh lemon/lime juice)',
        '\n\n○ 1 teaspoon light soy sauce',
        '\n\n○ 1 pinch sugar',
        '\n\n○ 1 clove garlic, minced',
        '\n\n○ Fresh chili pepper, finely chopped',
        ],

        ['➊ Mix the filling. Put all the ingredients for the filling into a large mixing bowl (Note: leave out one egg yolk for brushing the wrappers).',
        '\n\n➋ Add all the seasonings. Mix until well combined (It`s best to do so with your hands. Wear kitchen gloves if available).',
        '\n\n➌ Assemble the rolls. Gently separate the spring roll wrappers one by one. Remember to always cover them with a clean damp cloth as they dry out easily.',
        '\n\n➍ Place one wrapper on a flat surface with one of the four corners facing towards you. Put about 3 tablespoon of the filling above the closest corner (Use a spoon to help shape it into a rectangle).',
        '\n\n➎ Lift the closest corner to wrap the filling then roll it to the half-line of the wrapper. Try to wrap it as tight as possible without leaving any air pockets inside. But be gentle during this process to avoid tearing.',
        '\n\n➏ Lightly press two ends of the filling then fold the left and right corners of the wrapper towards the middle.',
        '\n\n➐ Roll the cylinder until only a triangle is left at the top. Brush a layer of egg yolk over the triangle. Roll again to seal completely. Repeat to assemble all the rolls.',
        '\n\n➑ Deep fry the rolls. Heat the oil for deep frying until it reaches 180°C/350°F. Gently slide in the rolls one by one (Do not overcrowd. Fry them in batches if necessary).',
        '\n\n➒ Fry over medium heat. Flip over a few times to ensure even browning. When they become golden, transfer out to a tray lined with kitchen paper to absorb excess oil.\n\n\n\n\n'],
        '4vSJ7DOK_iw'
        ],


        'Dish6': [require('./assets/scallionpancakes.jpg'), 'Scallion Pancakes \n(葱油饼)', 'Chinese', '35', 'Easy', '4',
        ['○ For the dough',
        '\n\n○ 250 grams all-purpose flour (plain flour)',
        '\n\n○ 3 and a half tablespoon Cooking oil - for coating',
        '\n\n○ 160 grams hot water',
        '\n\n○ For the filling',
        '\n\n○ 2 tablespoon melted lard - or coconut oil',
        '\n\n○ 2 tablespoon all-purpose flour (plain flour)',
        '\n\n○ ¼ teaspoon ground Sichuan pepper - or Chinese five-spice powder',
        '\n\n○ ¼ teaspoon salt',
        '\n\n○ 40 grams finely chopped scallions (green onion/spring onion)',
        '\n\n○ For frying',
        '\n\n○ 1 tablespoon neutral cooking oil', 
        '\n\n○ For serving (optional)', 
        '\n\n○ Black rice vinegar',  
        '\n\n○ Light soy sauce',  
        ],

        ['➊ Make the dough. Put flour into a heatproof bowl. Pour in hot water. Stir with chopsticks until no more loose flour or water can be seen. Use your hands to combine the mixture into a rough-looking dough.',
        '\n\n➋ Tightly cover the dough with cling film and leave to rest for 15 mins.',
        '\n\n➌ Prepare the filling. While waiting, add melted lard (or other oil), flour, Sichuan pepper (or five-spice) and salt to a small bowl. Mix until it becomes a smooth paste.',
        '\n\n➍ Shape the pancakes. Uncover the dough then knead until it becomes very smooth. Rub a thin layer of oil around the dough, as well as the work surface.',
        '\n\n➎ With a rolling pin, flatten the dough into a thin, rectangular piece. For your reference, mine measures about 43cm(17") by 33cm (13").',
        '\n\n➏ Brush the filling mixture over the dough, then sprinkle finely chopped scallions on top.',
        '\n\n➐ From the shorter side of the dough piece, roll the dough into a rope (don`t make it too tight).',
        '\n\n➑ Cut the rope into 4 cylinders. Stand a piece on one end. Press down with your hand, then flatten it with the rolling pin into a pancake that measures around 13cm/5” in diameter. Alternatively, cut the rope into 3 parts and roll each into a thinner pancake which measures about 23cm/9”.',
        '\n\n➒ Fry the pancakes. In a frying pan/skillet, heat oil over high heat until hot. Drop a piece of scallions in to test. If it sizzles, the oil is hot enough.',
        '\n\n➓ Turn the heat down to medium and put in the pancakes (the top side facing down). You may cook 4 thick pancakes all at once in a large pan (28cm/11"), or 1 thin pancake at a time.',
        '\n\n➊➊ Cover with a lid and leave to cook for about 2 minutes until the side facing down becomes golden brown (adjust the cooking time if necessary). Flip over to cook the other side (keep the lid on). Remove them from the pan once the second side turns golden too.',
        '\n\n➊➋ For the best result, rest the pancakes on a wire rack for a minute or two before serving (condensation will form if placed on a plate straightaway). Also, the remaining heat will cook the inside further during the resting time.',
        '\n\n➊➌ Serve. Best to enjoy them while warm. You can serve them as breakfast/afternoon snack, or as a staple for regular meals with savoury dishes, soup or congee.',
        '\n\n➊➍ The thick version can be served as it is and torn apart to eat. The thin version is often cut into triangular pieces.',
        '\n\n➊➎ Although they are tasty on their own, a dipping sauce would make a great accompaniment, e.g. a simple mixture of homemade chilli oil, black rice vinegar and light soy sauce.\n\n\n\n\n'],
        'qsRD4QWDtOU'
        ],

        'Dish7': [require('./assets/pannacota.jpg'), 'Vanilla Panna Cotta', 'Italian', 'Under 30', 'Easy', '2',
            ["○ 1 teaspoon unflavored gelatin\n\n○ 1 tablespoon cold water\n\n○ 1 ½ cups heavy cream(360 mL)\n\n○ ¼ cup sugar(50 g)\n\n○ ¼ teaspoon vanilla extract"],
            ["➊ Sprinkle gelatin over the water. The gelatin will absorb the water and dissolve, in a process called “blooming.\n\n",
            "➋ In a small saucepan, combine heavy cream with sugar and cook over medium until it’s at the scalding point, or just under a boil.\n\n",
            "➌ Once the cream has almost reached the boiling point, remove from heat and add vanilla extract and bloomed gelatin. Stir until fully dissolved.\n\n",
            "➍ Strain panna cotta mixture into desired serving tempered glasses.\n\n",
            "➎ Allow cream to come to room temperature before chilling in the fridge for 2-4 hours, or until the cream is firm in texture.\n\n",
            "➏ Top with berries and honey.\n\n\n\n\n"],
            'p5mSdmO6kEc'
        ],
            
        'Dish8': [require('./assets/pekingduck.jpg'), 'Peking Duck (北京烤鸭)', 'Chinese', '1 Hour and 15', 'Easy', '6',
        ['○ 1 duck - about 2.5 kilograms',
        '\n\n○ 2 tablespoon fine salt',
        '\n\n○ For the syrup',
        '\n\n○ 2 tablespoon maltose',
        '\n\n○ 120 mililiters hot water',
        '\n\n○ 1 teaspoon vinegar',
        '\n\n○ For the stuffing',
        '\n\n○ 2 stalks scallions',
        '\n\n○ 2 apples - quartered',
        '\n\n○ 4 star anise',
        '\n\n○ 4 bay leaves',
        '\n\n○ 2 pieces cassia cinnamon',
        '\n\n○ For the sauce',
        '\n\n○ 3 tablespoon sweet bean sauce',
        '\n\n○ 1 teaspoon sugar',
        '\n\n○ Peking duck pancakes - homemade or shop-bought',
        '\n\n○ Scallions - julienned',
        '\n\n○ Cucumber - peeled and seeds removed, cut into sticks', 
        ],

	    ['➊ Prepare the duck.',
        '\n\n➋ Pat dry the duck with kitchen paper then rub the salt over the skin and the cavity. Put the duck over a wire rack with a tray underneath to collect any drips. Leave to rest on the counter for 1 hour.',
        '\n\n➌ Bring about 1½ litres of water (about 6 cups) to a boil, then gently pour it over the entire duck skin (remember to flip over and do the other side). You can use a deep tray to collect the water, or do it inside a sink. If there are feather ends on the skin, remove them with a tweezer.',
        '\n\n➍ In a bowl, mix maltose with hot water and vinegar until completely dissolved. Brush a layer of the mixture over the duck skin. Leave to rest in the fridge for 1 hour then brush another layer.',
        '\n\n➎ Keep the duck refrigerated uncovered (over the rack and inside a tray) for 24 to 48 hours.',
        '\n\n➏ Roast the duck. One hour before roasting, take the duck out of the fridge to bring it back to room temperature. Put all the stuffing ingredients (scallions, garlic, apples, star anise, cassia cinnamon and bay leaves) into the cavity. Use toothpicks or skewers to seal the openings of the cavity.',
        '\n\n➐ Preheat a fan-assisted oven, aka convection oven, at 200°C/390°F (or 220°C/425°F if using a conventional oven). Put the duck over the middle rack of the oven with the breast side facing up. Place a roasting tray at the bottom of the oven to collect any dripping fat during roasting. Leave to cook for 15 minutes.',
        '\n\n➑ Then lower the temperature to 180°C/350°F (or 200°C/390°F if using a conventional oven). Use aluminium foil to cover the tip of the wings and the end of the legs. Continue cooking for a further 60 minutes or so.',
        '\n\n➒ Check the doneness by inserting an instant-read thermometer into the thickest part of the duck (the inner thigh area near the breast). The temperature should be no lower than 74C°/165F°.',
        '\n\n➓ Serve the duck. Take the duck out of the oven and leave it to rest on the counter for 15 minutes.',
        '\n\n➊➊ While waiting, prepare the sauce. Add ½ tablespoon of duck fat collected during roasting to a pan. Add sweet bean sauce and sugar. Mix and simmer over low heat until tiny bubbles appear. Transfer to a small serving dish. Whisk to fully incorporate the sauce and oil.',
        '\n\n➊➋ Steam the pancakes for 3 minutes to warm up if they`re cold. Slice the duck into pieces.',
        '\n\n➊➌ When eating, spread a little sauce over a pancake, put the duck, scallions and cucumber in the middle. Wrap up into a cylinder and enjoy.',
        '\n\n➊➍ Cook a soup (optional). After most of the meat has been removed from the duck, boil the carcass in water to make a soup with Napa cabbage or winter melon. Simply add salt and white pepper to season.\n\n\n\n\n'],
        'KnJ3abXjgME'
        ],

        'Dish9': [require('./assets/mapotofu.jpg'), 'Mapo Tofu (麻婆豆腐)', 'Chinese', '20', 'Easy', '2',
        ['○ For the tofu',
        '\n\n○ 600 grams regular tofu - soft or medium firm',
        '\n\n○ 1 teaspoon salt',
        '\n\n○ For the sauce',
        '\n\n○ 2 tablespoon neutral cooking oil',
        '\n\n○ 100 g minced beef - or pork',
        '\n\n○ 1 teaspoon minced ginger',
        '\n\n○ 2 tablespoon Sichuan chilli bean paste',
        '\n\n○ 1 tablespoon fermented black beans - rinsed and chopped',
        '\n\n○ 1 tablespoon ground chilli - or chilli flakes (or to taste)',
        '\n\n○ 1 tablespoon minced garlic', 
        '\n\n○ 1 tablespoon Shaoxing rice wine', 
        '\n\n○ 400 ml water - or unsalted stock', 
        '\n\n○ 2 tablespoon cornstarch - mixed with 3 tablespoons water', 
        '\n\n○ ½ teaspoon ground Sichuan pepper - or to taste', 
        '\n\n○ 1 stalk scallions - finely chopped', 
        ],

	    ['➊ Cut the tofu into 2.5cm/1inch cubes. Gently slide them into a wok/pot filled with water. Add the salt. Bring the water to a boil then simmer for 1 minute. Drain the tofu and set it aside.',
        '\n\n➋ Heat up an empty wok until hot then add the oil. Put in minced meat, along with minced ginger. Stir fry over high heat until the meat becomes pale.',
        '\n\n➌ Add Sichuan chilli bean paste, fermented black beans, chilli powder/flakes and minced garlic. Fry until fragrant.',
        '\n\n➍ Pour in Shaoxing rice wine and 400ml of water or unsalted stock. Bring to a boil then gently slide in the tofu. Leave to boil for about 5 minutes (uncovered).',
        '\n\n➎ Turn the heat down to medium. Add half of the cornstarch water mixture (make sure to stir it well beforehand). Leave to simmer for 10 seconds or so, then pour in the remaining half.',
        '\n\n➏ Once the sauce becomes just thick enough to coat the spatula, add ground Sichuan pepper and chopped scallions. Give everything a gentle mix then turn off the heat immediately. Serve it hot with plain steamed rice.',
        '\n\n➐ Notes: Classic Mapo tofu calls for regular tofu which comes in pressed blocks and is usually soaked in water.  Silken tofu (绢豆腐), a type of unpressed tofu that coagulates directly in its container, isn`t a traditional choice but acceptable as a substitute. In this case, choose medium-firm or firm silken tofu and avoid the soft version.',
        '\n\n➑ Different brands of Sichuan chilli bean paste (aka spicy doubanjiang) may vary in saltiness, spiciness and texture. Adjust the quantity accordingly. I always use Pixian Douban (郫县豆瓣), a well-known variety, for this dish.',
        '\n\n➒ In terms of the level of hotness and numbing sensation, this recipe is not adapted for non-Sichuanese tastes. You might find it too pungent if you are not accustomed to it. Please feel free to alter the quantity of ground chilli (chilli flakes) and ground Sichuan pepper. You may also add a little sugar to balance the spiciness as well as the saltiness.\n\n\n\n\n'],
        '740FU5Y2Wwg'
        ],

        'Dish10': [require('./assets/bibingka.jpg'), 'Bibingka', 'Filipino', '45', 'Easy', '3',
        ['○ 1 cup rice flour',
        '\n\n○ ⅛ teaspoon salt',
        '\n\n○ 2 ½  teaspoon baking powder',
        '\n\n○ 3 tablespoons butter',
        '\n\n○ ½ cup granulated sugar',
        '\n\n○ 1 cup coconut milk',
        '\n\n○ ¼ cup fresh milk',
        '\n\n○ 1 piece sliced salted duck egg',
        '\n\n○ ½ cup grated cheese',
        '\n\n○ 3 pieces raw eggs',
        '\n\n○ ¼ cup grated coconut', 
        '\n\n○ Pre-cut banana leaf',
        ],

	    ['➊ Preheat oven to 375 degrees Fahrenheit or 190 degrees Celcius.',
        '\n\n➋ Combine rice flour, baking powder, and salt then mix well. Set aside.',
        '\n\n➌ Cream butter then gradually put-in sugar while whisking.',
        '\n\n➍ Add the eggs then whisk until every ingredient is well incorporated.',
        '\n\n➎ Gradually add the rice flour, salt, and baking powder mixture then continue mixing.',
        '\n\n➏ Pour-in coconut milk and fresh milk then whisk some more for 1 to 2 minutes.',
        '\n\n➐ Arrange the pre-cut banana leaf on a cake pan or baking pan.',
        '\n\n➑ Pour the mixture on the pan.',
        '\n\n➒ Bake for 15 minutes.',
        '\n\n➓ Remove from the oven then top with sliced salted egg and grated cheese (do not turn the oven off).',
        '\n\n➊➊ Put back in the oven and bake for 15 to 20 minutes or until the color of the top turn medium brown.',
        '\n\n➊➋ Remove from the oven and let cool.',
        '\n\n➊➌ Brush with butter and top with grated coconut.',
        '\n\n➊➍ Serve. Share and enjoy!\n\n\n\n\n'],
        'rJwHZ3GrTC0'
        ],

        'Dish11': [require('./assets/mooncakes.jpg'), 'Mooncakes (广式月饼)', 'Chinese', '2 hours 30', 'Medium', '20',
        ['○ BEFORE YOU START: Please be aware that this type of mooncake needs to be rested for 1 to 2 days after baking.',
        '\n\n○ Needed Equipments: Mooncake mold for making small 1.8oz/50g ones',
        '\n\n○ Kitchen scale',
        '\n\n○ Pastry brush',
        '\n\n○ Baking sheet',
        '\n\n○ Ingredients:',
        '\n\n○ For the paste',
        '\n\n○ 100 g dried lotus seeds',
        '\n\n○ 75 g sugar - or to taste',
        '\n\n○ 50 g neutral cooking oil - such as sunflower, canola, vegetable, peanut, rapeseed oil, etc.',
        '\n\n○ For the dough',
        '\n\n○ 150 grams golden syrup',
        '\n\n○ ½ teaspoon lye water - aka Kansui',
        '\n\n○ 50 grams neutral cooking oil - such as sunflower, canola, vegetable, peanut, rapeseed oil, etc.',
        '\n\n○ 220 grams all-purpose flour - aka plain flour',
        '\n\n○ 20 salted egg yolks - ready-to-use ones',
        '\n\n○ Cornstarch - for dusting',
        '\n\n○ 1 egg yolk - for brushing', 
        ],

	    ['➊ Cook the paste (skip if using shop-bought one). Soak dried lotus seeds in water overnight. Drain well and remove the green bit in the center (if any).',
        '\n\n➋ Cook the seeds in simmering water (enough to cover) until soft (about 30-40 minutes). Drain then puree them in a food processor (add a little water if necessary).',
        '\n\n➌ Transfer the puree into a non-stick pan. Cook over medium heat. Add sugar and oil in batches. Stir and flip constantly. Once the paste becomes dry and holds in shape, remove from the heat to cool.',
        '\n\n➍ In preparing the dough, mix golden syrup, oil and lye water until well incorporated. Add flour. Combine and knead briefly to form a soft dough.',
        '\n\n➎ Cover with plastic wrap and rest for 30 minutes.',
        '\n\n➏ Assembling, Put one salted egg yolk and some lotus seed paste on the scale. Adjust the filling to reach 30 grams.',
        '\n\n➐ Flatten the paste into a round wrapper. Place the egg yolk in the middle. Gently push the paste upwards to seal the yolk completely.',
        '\n\n➑ Flatten 20g of the dough into a wrapper. Use the same method to tightly wrap around the filling and make a ball.',
        '\n\n➒ In shaping the mooncakes, Coat the ball with a thin layer of cornstarch. Put it into a mooncake mold.',
        '\n\n➓ Over a baking tray lined with parchment paper, place the mold with the opening facing down. Gently press the handle to shape the cake. Lift the mold and press again to release the cake.',
        '\n\n➊➊ For baking, Preheat the oven to 375°F/190°C. Bake the cakes for 5 minutes. While waiting, mix the egg yolk with 1 teaspoon of water for brushing later.',
        '\n\n➊➋ When the time is up, reduce the oven temperature to 320°F/160°C. Take out the mooncakes and brush their top with a thin layer of the egg wash.',
        '\n\n➊➌ Put them back into the oven and bake for a further 5 minutes. Take out and coat them with another layer of egg wash. Then continue to bake for 10-15 minutes until evenly brown.',
        '\n\n➊➍ For resting & storing, transfer the baked mooncakes to a cooling rack. Once completely cooled, store them in an airtight container for 1-2 days before consumption. They are ready to be served once soft to touch and appear shiny.',
        '\n\n➊➎ You may keep them in the fridge for up to 2 weeks. Bring back to room temperature before serving.',
        '\n\n➊➏ NOTES: You may use ready-to-use lotus seed paste from Chinese shops. Alternatively, replace it with homemade or shop-bought red bean paste, black sesame paste, etc.',
        '\n\n➊➐ If lye water is unavailable, check out my post on how to make homemade lye water using baking powder.',
        '\n\n➊➑ The amount of flour needed may vary depending on the thickness of the syrup and the absorbent nature of the flour. Adjust accordingly.',
        '\n\n➊➒ Alternatively, use raw salted duck eggs. See instructions in the post above to learn how to prepare them.',
        '\n\n➋⓿ Don’t coat the patterned surface with too much egg wash. Before brushing, remove excess liquid by pressing the brush on the rim of the bowl.\n\n\n\n\n'],
        'Mo3e0DVy71E'
        ],

        'Dish12': [require('./assets/redbean.jpg'), 'Red Bean Buns (豆沙包)', 'Chinese', '2 and 30', 'Medium', '14',
        ['○ For the filling',
        '\n\n○ 150 grams adzuki beans (aka red beans), or 350g canned ones',
        '\n\n○ 2 tablespoon white sugar',
        '\n\n○ 1 tablespoon dark brown sugar',
        '\n\n○ 80 g butter',
        '\n\n○ For the dough',
        '\n\n○ 350 grams all-purpose flour, or bao flour/cake flour',
        '\n\n○ 2 teaspoon instant dry yeast',
        '\n\n○ 2 teaspoon baking powder',
        '\n\n○ 1 tablespoon sugar',
        '\n\n○ 1 & ½ tablespoon neutral cooking oil', 
        '\n\n○ 180 grams lukewarm water, adjust slightly if necessary',
        ],

	    ['➊ In cooking the beans (skip if using canned beans). Soak adzuki beans in water overnight. Drain then put into a pot. Pour in 500ml of water. Bring it to a boil then leave to simmer for about 90 mins until cooked (You may use a pressure cooker/instant pot to reduce the cooking time).',
        '\n\n➋ In making the paste, put drained beans into a blender or food processor (see note 6 for handmade option). Add white sugar, dark brown sugar and butter (or coconut oil). Blend on high speed into a fine paste. You may need to add a little water to make blending easier. However, only add as little as necessary.',
        '\n\n➌ Transfer the soft paste into a non-stick pan. Cook over medium-high heat while stirring and flipping constantly to avoid burning. Once the paste becomes dark and holds in shape, transfer out to cool.',
        '\n\n➍ In preparing the dough, IF USING HANDS: Mix flour, sugar, baking powder, yeast and oil in a bowl. Add water gradually while mixing with a pair of chopsticks/spatula. Combine with your hands to form a rough dough. Rest (covered) for 10 mins then knead again until very smooth.',
        '\n\n➎ IF USING A STAND MIXER: Add all the ingredients for the dough into the mixing bowl. Knead on low speed for about 8 mins until a smooth dough forms.',
        '\n\n➏ In rolling the wrappers, Roll the dough into a long rope then divide into 14 equal parts. Work on one piece at a time and make sure you cover the rest to prevent them from drying out.',
        '\n\n➐ With a rolling pin, flatten one piece into a disc-like wrapper, about 10cm in diameter (Dust with flour if necessary). Ideally, it should be thinner on the edge & thicker in the middle.',
        '\n\n➑ In assembling the buns, Place a spoonful of the cooled red bean paste (about 30g) in the middle of a wrapper. Seal the bun completely using whatever method that you feel most comfortable with.',
        '\n\n➒ Put the bun on the work surface with the sealed side facing down. Rotate the bun between your hands to form a slightly raised shape.',
        '\n\n➓ OPTIONAL STEP: If you wish to make it festive, mark a red dot (or other pattern) on top of the bun with a little red food colouring.',
        '\n\n➊➊ Repeat to finish all the wrappers and filling. Then place the buns into steamer baskets lined with parchment paper to prevent sticking (Alternatively, brush a thin layer of oil if using a metal/plastic steamer). Make sure you leave ample space between each bun.',
        '\n\n➊➋ Leave to rest for 30 minutes or so until they become very light & plump (no need to cover).</Text>',
        '\n\n➊➌ Lastly, in steaming the buns, bring water to a full boil in a wok/pot. Place the steamer baskets in.',
        '\n\n➊➍ Steam over medium-high heat for 10 mins. Serve immediately.',
        '\n\n➊➎ In storing and re-heating, Red bean paste can be kept in the fridge for up to 3 days or in the freezer for two months.',
        '\n\n➊➏ Store leftover buns in the fridge for up to 3 days or in the freezer for two months (It’s not recommended to refrigerate or freeze uncooked buns).',
        '\n\n➊➐ To reheat the buns, defrost in the fridge then steam for 3 mins. Alternatively, steam for 6 mins without defrosting.\n\n\n\n\n'],
        '9v5D2J4O23E'
        ],

        'Dish13': [require('./assets/cacioepepe.jpg'), 'Cacio e Pepe', 'Italian', '30', 'Easy', '4',
        ['○ ½ lb spaghetti(225 g)',
        '\n\n○ 2 tablespoons olive oil',
        '\n\n○ 2 tablespoons unsalted butter',
        '\n\n○ 2 teaspoons coarsely ground black pepper',
        '\n\n○ 4 oz grated parmesan cheese(115 g), or pecorino romano cheese', 
        ],

	    ['➊ Bring a large pot of salted water to a boil. Cook the pasta for 1 minute less than the package instructs, until al dente. Save 1 cup (240 ml) pasta water, then drain.',
        '\n\n➋ Heat a large sauté pan over medium heat. Add the olive oil, butter, and pepper, and stir to combine.',
        '\n\n➌ Stir in the reserved pasta water.',
        '\n\n➍ Toss in the cooked pasta. Reduce the heat to low.',
        '\n\n➎ Add the Parmesan and toss until the cheese is melted and the pasta is well-coated.',
        '\n\n➏ Season with salt, if desired.\n\n\n\n\n'],
        '6FCRjCFAlZk'
        ],

        'Dish14': [require('./assets/gyudon.jpg'), 'Gyudon (牛丼)', 'Japanese', '20', 'Easy', '2',
        ['○ ½ onion',
        '\n\n○ 1 green onion/scallion',
        '\n\n○ ½ lbs thinly sliced beef (chuck or ribeye)',
        '\n\n○ For The Sauce:',
        '\n\n○ ½ cup of dashi (Japanese soup stock)',
        '\n\n○ 2 tbsp of sake',
        '\n\n○ 2 tbsp of mirin',
        '\n\n○ 3 tbsp of soy sauce',
        '\n\n○ 1 tbsp of sugar',
        '\n\n○ For Serving:',
        '\n\n○ 2 servings of cooked Japanese short grain rice', 
        '\n\n○ Pickled red ginger',
        ],

	    ['➊For the steamed rice, please note that 1½ cups (300 g, 2 rice cooker cups) of uncooked Japanese short-grain rice yield 4⅓ cups (660 g) of cooked rice, enough for 2 donburi servings (3⅓ cups, 500 g).',
        '\n\n➋Gather all the ingredients. I usually put the thinly sliced beef in the freezer for 10 minutes because it‘s a lot easier to cut semi-frozen meat.',
        '\n\n➌First, thinly slice ½ onion.',
        '\n\n➍Next, cut 1 green onions/scallions diagonally into thin slices. Set aside.',
        '\n\n➎Then, add the meat on top of the onions. Separate the thin slices of beef so the meat covers the onions.',
        '\n\n➏Cover the pan with a lid. Now, turn on the heat to medium and start cooking.',
        '\n\n➐Sprinkle the green onions on top and cook covered for another minute.',
        '\n\n➑Put the beef and onion mixture on top of the rice. If you’d like, drizzle additional remaining sauce on top. Top the Gyudon with pickled red ginger.\n\n\n\n\n'],
        'gCQGDWlVN50'
        ],


        };

    return (
        <ValuesContext.Provider value={values}>
            {children}
        </ValuesContext.Provider>
    );
};
