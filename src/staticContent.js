import { StaticImage } from "gatsby-plugin-image"
import React from "react"

export const IndexContent = {
    landingDescription: `Arya Pulses is your trusted partner for high-quality pulses. We solely
    focus on sourcing quality products directly from the farm to.
    Our pulses are nutritious, delicious and versatile. They are also gluten-free, vegan and high in protein and fibre.`,
    aboutusDescription: `Arya Pulses was founded in 2016, a company solely dedicated to
    exporting pulses and lentils worldwide from Australia. As one of
    the largest regional Australian grain traders. We have a strong network of farmers and suppliers who share our commitment to quality and sustainability. Our products are natural, non-GMO and free from artificial colours, flavours and preservatives. We deliver our products across the world and ensure timely and reliable service.`,
    whatwedoDescription: `Arya Pulses Australia was estabished in the year 2016. We solely focus on sourcing quality products directly from the farm to customers worldwide. Arya Pulses Australia deals with Lentils, Yellow split peas, Kabuli chickpeas, Desi chickpeas and Mung beans. We supply all products packed as Bulk or Bagged.`
}

export const OurProductsData = [
    {
        image: (
            <StaticImage
                src="./images/lentils.png"
                objectFit='contain'
                style={{width: "100%"}}
                placeholder="blurred"
                quality={100}
                />
        ),
        name: "Lentils",
        description: "Lentils are small, nutritious legumes that are widely used in cooking for their high protein and fiber content."
    },
    {
        image: (
            <StaticImage
                src="./images/kabul-chickpeas.png"
                objectFit='contain'
                style={{width: "100%"}}
                placeholder="blurred"
                quality={100}
                />
        ),
        name: "Kabuli Chickpeas",
        description: "Kabuli chickpeas are healthy legumes, high in protein and fiber, with a nutty flavor. Versatile in cooking."
    },
    {
        image: (
            <StaticImage
                src="./images/mung-beans.png"
                objectFit='contain'
                style={{width: "100%"}}
                placeholder="blurred"
                quality={100}
                />
        ),
        name: "Mung Beans",
        description: "Mung beans are small legumes with nutty flavor, high in protein and fiber. Used in soups, curries, salads."
    },
    {
        image: (
            <StaticImage
                src="./images/desi-chickpeas.png"
                objectFit='contain'
                style={{width: "100%"}}
                placeholder="blurred"
                quality={100}
                />
        ),
        name: "Desi Chickpeas",
        description: "Desi chickpeas are legumes with a strong nutty flavor and firm texture, commonly used in curries, stews, salads, and snacks."
    },
    {
        image: (
            <StaticImage
                src="./images/yellow-splitpeas.png"
                objectFit='contain'
                style={{width: "100%"}}
                placeholder="blurred"
                quality={100}
                />
        ),
        name: "Yellow Split Peas",
        description: "Yellow split peas are legumes with a mild flavor and soft texture, often used in soups, stews, and curries for their high protein and fiber content."
    },
    {
        image: (
            <StaticImage
                src="./images/wheat-grain.png"
                objectFit='contain'
                style={{width: "100%"}}
                placeholder="blurred"
                quality={100}
                />
        ),
        name: "Wheat Grain",
        description: "Wheat grain is a nutritious cereal with a mild, nutty flavor, high in fiber, protein, and various nutrients, commonly used in baked goods and cereals."
    },
    {
        image: (
            <StaticImage
                src="./images/red-sorghum.png"
                objectFit='contain'
                style={{width: "100%"}}
                placeholder="blurred"
                quality={100}
                />
        ),
        name: "Red Sorghum",
        description: "Red sorghum is a gluten-free cereal with a mild, nutty flavor, rich in antioxidants, fiber, and protein, commonly used in porridges, salads, and baked goods."
    },
    {
        image: (
            <StaticImage
                src="./images/faba-beans.png"
                objectFit='contain'
                style={{width: "100%"}}
                placeholder="blurred"
                quality={100}
                />
        ),
        name: "Faba Beans",
        description: "Faba beans are protein-rich legumes with a buttery texture and nutty flavor, used in stews, soups, salads, and dips."
    },
    {
        image: (
            <StaticImage
                src="./images/kaspa-peas.png"
                objectFit='contain'
                style={{width: "100%"}}
                placeholder="blurred"
                quality={100}
                />
        ),
        name: "Kaspa Peas",
        description: "Kaspa peas are small, sweet peas with a smooth texture and nutty flavor, commonly used in soups, stews, salads, and casseroles."
    }
]

export const plantProteinData = [
    {
        title: "Plant Protein",
        description: `One of the most common misconceptions about plant-based diets
        is that they are lacking in protein. Not only is this
        completely untrue, but plant-based proteins provide some
        amazing health benefits. Proteins are made up of amino acids
        and there are 20 of them in total.The human body is able to
        synthesize or create 11 of them – the remaining 9 are known as
        “essential amino acids” because they must come from your diet.`
    },
    {
        title: 'Protein',
        description: `The Academy of Nutrition and Dietetics recommends a daily
        intake of 0.8 grams of protein per kilogram of body weight –
        that translates to about 0.35 grams per pound. A person
        weighing 165 pounds would need a minimum of 60 grams of
        protein per day. Keep in mind that this is a minimum. If you
        are trying to lose weight, build muscle mass, or if you
        exercise regularly, your protein needs may be higher –
        somewhere in the range of 0.5 to 0.8 grams per pound of body
        weight.`
    }
]

export const country = [
    'Australia',
    'China',
    'Singapore',
    'Malaysia',
    'Dubai',
    'India',
    'Srilanka'
]