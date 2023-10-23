export const useProductsStore = definePiniaStore('products', () => {
    const products = ref([])

    const fetchProducts = async () => {
      try {
        const { data } = await useFetch('/api/shop/products')
        return products.value = data.value
      } catch (error) {
        throw new Error(error)
      }
    }

    const addProduct = async (product) => {
      try {
        await useFetch('/api/shop/products/', {
          method: 'POST',
          body: product
        })
        products.value.push(product)
      } catch (error) {
        throw new Error(error)
      }
    }

    const updateProduct = async (product) => {
      try {
        await useFetch(`/api/shop/products/${product.id}`, {
          method: 'PUT',
          body: product
        })
        const newOrderList = products.value.filter(p => p !== product)
        newOrderList.push(product)
      } catch (error) {
        throw new Error(error)
      }
    }

    const removeProduct = async (product) => {
      try {
        await useFetch(`/api/shop/products/${product.id}`, {
          method: 'DELETE'
        })
        products.value = products.value.filter(p => p !== product)
      } catch (error) {
        throw new Error(error)
      }
    }

    const importJSON = async (data) => {
      try {
        await useFetch('/api/shop/products/import', {
          method: 'POST',
          body: data
        })
        for (let product of data) {
          products.value.push(product)
        }
      } catch (error) {
        throw new Error(error)
      }
    }

    return {
      products,
      fetchProducts,
      addProduct,
      updateProduct,
      removeProduct,
      importJSON
    }
})

const demoProducts = [
  {
    "group-id": 1,
    "group-name": "Coffeeshop TLC",
    "group-slug": "coffeeshop",
    "subgroup-id": 3,
    "subgroup-slug": "tabak-tabakersatz",
    "subgroup-name": "Tabak & Tabakersatz",
    "product-id": 158,
    "brand": "RealLeaf",
    "name": "„Pineapple Express “ Ananas Kush 20g Kräutermischung  0% Nikotin",
    "property-name": "Inhalt",
    "property-value": "20g",
    "color": "Weiß / gelb",
    "properties": "Geschmack: Pineapple Kush",
    "description": "Du möchtest dein Nikotinverbrauch senken - kannst oder willst mit dem Rauchen nicht aufhören und suchst einen guten Ersatz für nikotinhaltigen Tabak? \n\n Wie wär’s mit der Kräutermischung von Real Leaf in der Sorte „Pineapple Express“? \n\n Er ist ein 100% natürlicher Tabakersatz mit Terpenen von der Sativa-Cannabis-Pflanze (0% THC, 0% CBD) der duftet nach einer leicht blumigen Mischung aus Apfel und Mango. Das Aroma erinnert an einen Mix aus Ananas, Kiefer und Zeder.",
    "facts": "- Inhalt eines Pouches beträgt 20g \n- Die Schnittart der Kräutermischung ist gegrindet \n- Die Mischung ist aus Himbeer-, Eibisch- und Königskerzenblätter \n- Anzahl zu möglich gedrehten Zigaretten sind circa 90.",
    "selling-price": 8.95,
    "account": 8400,
    "tax": "19,00 %",
    "buying-price": 5.00,
    "EAN": "6500459884694",
    "quantity": 1,
    "featured": true,
    "images": [
      "/coffeeshop-tlc/tabak-und-tabakersatz/classic-30g-krauutermischung-0-nikotin/Front.png",
      "/coffeeshop-tlc/tabak-und-tabakersatz/classic-30g-krauutermischung-0-nikotin/Liegend.png"
    ]
  },
  {
    "group-id": 1,
    "group-name": "Coffeeshop TLC",
    "group-slug": "coffeeshop",
    "subgroup-id": 3,
    "subgroup-slug": "tabak-tabakersatz",
    "subgroup-name": "Tabak & Tabakersatz",
    "product-id": 157,
    "brand": "RealLeaf",
    "name": "„Jack Herer“ 20g Kräutermischung 0% Nikotin",
    "property-name": "Inhalt",
    "property-value": "20g",
    "color": "Weiß / grün",
    "properties": "Geschmack: Jack Herer",
    "description": "Du möchtest dein Nikotinverbrauch senken - kannst oder willst mit dem Rauchen nicht aufhören und suchst einen guten Ersatz für nikotinhaltigen Tabak? \n\n Wie wär’s mit der Kräutermischung von Real Leaf in der Sorte „Pineapple Express“? \n\n Er ist ein 100% natürlicher Tabakersatz mit Terpenen von der Sativa-Cannabis-Pflanze (0% THC, 0% CBD) der duftet nach einer leicht blumigen Mischung aus Apfel und Mango. Das Aroma erinnert an einen Mix aus Ananas, Kiefer und Zeder.",
    "facts": "- Inhalt eines Pouches beträgt 20g \n- Die Schnittart der Kräutermischung ist gegrindet \n- Die Mischung ist aus Himbeer-, Eibisch- und Königskerzenblätter \n- Anzahl zu möglich gedrehten Zigaretten sind circa 90.",
    "selling-price": 8.95,
    "account": 8400,
    "tax": "19,00 %",
    "buying-price": 5.00,
    "EAN": "6500459885998",
    "quantity": 2,
    "featured": true,
    "images": [
      "/coffeeshop-tlc/tabak-und-tabakersatz/jack-here-20g-krauutermischung-0-nikotin/Front.png",
      "/coffeeshop-tlc/tabak-und-tabakersatz/jack-here-20g-krauutermischung-0-nikotin/Liegend.png"
    ]
  },
  {
    "group-id": 1,
    "group-name": "Coffeeshop TLC",
    "group-slug": "coffeeshop",
    "subgroup-id": 3,
    "subgroup-slug": "tabak-tabakersatz",
    "subgroup-name": "Tabak & Tabakersatz",
    "product-id": 159,
    "brand": "RealLeaf",
    "name": "„Classic“ 30g Kräutermischung  0% Nikotin",
    "property-name": "Inhalt",
    "property-value": "30g",
    "color": "braun",
    "properties": "Geschmack: Classic",
    "description": "Du möchtest dein Nikotinverbrauch senken - kannst oder willst mit dem Rauchen nicht aufhören und suchst einen guten Ersatz für nikotinhaltigen Tabak? \n\n Wie wär’s mit der Kräutermischung von Real Leaf in der Sorte „Pineapple Express“? \n\n Er ist ein 100% natürlicher Tabakersatz mit Terpenen von der Sativa-Cannabis-Pflanze (0% THC, 0% CBD) der duftet nach einer leicht blumigen Mischung aus Apfel und Mango. Das Aroma erinnert an einen Mix aus Ananas, Kiefer und Zeder.",
    "facts": "- Inhalt eines Pouches beträgt 20g \n- Die Schnittart der Kräutermischung ist gegrindet \n- Die Mischung ist aus Himbeer-, Eibisch- und Königskerzenblätter \n- Anzahl zu möglich gedrehten Zigaretten sind circa 90.",
    "selling-price": 8.95,
    "account": 8400,
    "tax": "19,00 %",
    "buying-price": 5.00,
    "EAN": "6500459886056",
    "quantity": 1,
    "featured": true,
    "images": [
      "/coffeeshop-tlc/tabak-und-tabakersatz/classic-30g-krauutermischung-0-nikotin/Front.png",
      "/coffeeshop-tlc/tabak-und-tabakersatz/classic-30g-krauutermischung-0-nikotin/Liegend.png"
    ]
  },
  {
    "group-id": 1,
    "group-name": "Coffeeshop TLC",
    "group-slug": "coffeeshop",
    "subgroup-id": 4,
    "subgroup-slug": "papes-tips",
    "subgroup-name": "Papes & Tips",
    "product-id": 14,
    "brand": "Threebees",
    "name": "Natural Rolling Papers , All-in-One",
    "property-name": "Inhalt",
    "property-value": "32 Blatt",
    "color": "braun",
    "properties": "All-in-One , King Size (108mm)",
    "description": "Du möchtest dein Nikotinverbrauch senken - kannst oder willst mit dem Rauchen nicht aufhören und suchst einen guten Ersatz für nikotinhaltigen Tabak? \n\n Wie wär’s mit der Kräutermischung von Real Leaf in der Sorte „Pineapple Express“? \n\n Er ist ein 100% natürlicher Tabakersatz mit Terpenen von der Sativa-Cannabis-Pflanze (0% THC, 0% CBD) der duftet nach einer leicht blumigen Mischung aus Apfel und Mango. Das Aroma erinnert an einen Mix aus Ananas, Kiefer und Zeder.",
    "facts": "- Inhalt eines Pouches beträgt 20g \n- Die Schnittart der Kräutermischung ist gegrindet \n- Die Mischung ist aus Himbeer-, Eibisch- und Königskerzenblätter \n- Anzahl zu möglich gedrehten Zigaretten sind circa 90.",
    "selling-price": 3.50,
    "account": 8400,
    "tax": "19,00 %",
    "buying-price": 1.5,
    "EAN": "4270001157577",
    "quantity": 15,
    "featured": true,
    "images": [
      "/coffeeshop-tlc/papes-tips/natural-rolling-papers-all-in-one/geoeffnetes-Mischefach.png",
      "/coffeeshop-tlc/papes-tips/natural-rolling-papers-all-in-one/geoeffnetes-Bloettchenfach.png",
      "/coffeeshop-tlc/papes-tips/natural-rolling-papers-all-in-one/Front-geoeffnet.png"
    ]
  },
  {
    "group-id": 1,
    "group-name": "Coffeeshop TLC",
    "group-slug": "coffeeshop",
    "subgroup-id": 4,
    "subgroup-slug": "papes-tips",
    "subgroup-name": "Papes & Tips",
    "product-id": 15,
    "brand": "Rolling Supreme",
    "name": "Glass Clear Rolling Papers",
    "property-name": "Inhalt",
    "property-value": "40 Blatt",
    "color": "schwarz,klar",
    "properties": "King Size (108mm)",
    "description": "Du möchtest dein Nikotinverbrauch senken - kannst oder willst mit dem Rauchen nicht aufhören und suchst einen guten Ersatz für nikotinhaltigen Tabak? \n\n Wie wär’s mit der Kräutermischung von Real Leaf in der Sorte „Pineapple Express“? \n\n Er ist ein 100% natürlicher Tabakersatz mit Terpenen von der Sativa-Cannabis-Pflanze (0% THC, 0% CBD) der duftet nach einer leicht blumigen Mischung aus Apfel und Mango. Das Aroma erinnert an einen Mix aus Ananas, Kiefer und Zeder.",
    "facts": "- Inhalt eines Pouches beträgt 20g \n- Die Schnittart der Kräutermischung ist gegrindet \n- Die Mischung ist aus Himbeer-, Eibisch- und Königskerzenblätter \n- Anzahl zu möglich gedrehten Zigaretten sind circa 90.",
    "selling-price": 8.95,
    "account": 8400,
    "tax": "19,00 %",
    "buying-price": 1.5,
    "EAN": "716165171263",
    "quantity": 24,
    "featured": true,
    "images": [
      "/coffeeshop-tlc/papes-tips/glass-clear-bloettchen/goeffnet-mit-Bloettchen.png",
      "/coffeeshop-tlc/papes-tips/glass-clear-bloettchen/Front-geoeffnet.png",
      "/coffeeshop-tlc/papes-tips/glass-clear-bloettchen/Front.png"
    ]
  },
  {
    "group-id": 2,
    "group-name": "Raucherzubehör",
    "group-slug": "raucherzubehoer",
    "subgroup-id": 5,
    "subgroup-slug": "feuerzeuge",
    "subgroup-name": "Feuerzeuge",
    "product-id": 29,
    "brand": "Clipper",
    "name": "Reibrad-Feuerzeug mit Cover Pop „ Comic Slogan“",
    "property-name": "Produktgröße in Maßeinheiten",
    "property-value": "73 x 30 mm",
    "color": "",
    "properties": "",
    "description": "Du möchtest dein Nikotinverbrauch senken - kannst oder willst mit dem Rauchen nicht aufhören und suchst einen guten Ersatz für nikotinhaltigen Tabak? \n\n Wie wär’s mit der Kräutermischung von Real Leaf in der Sorte „Pineapple Express“? \n\n Er ist ein 100% natürlicher Tabakersatz mit Terpenen von der Sativa-Cannabis-Pflanze (0% THC, 0% CBD) der duftet nach einer leicht blumigen Mischung aus Apfel und Mango. Das Aroma erinnert an einen Mix aus Ananas, Kiefer und Zeder.",
    "facts": "- Inhalt eines Pouches beträgt 20g \n- Die Schnittart der Kräutermischung ist gegrindet \n- Die Mischung ist aus Himbeer-, Eibisch- und Königskerzenblätter \n- Anzahl zu möglich gedrehten Zigaretten sind circa 90.",
    "selling-price": 3.50,
    "account": 8400,
    "tax": "19,00 %",
    "buying-price": 2.00,
    "EAN": "8412766014955",
    "quantity": 30,
    "featured": true,
    "images": [
      "/raucherzubehoer/feuerzeuge/clipper-feuerzeug-berlin-skyline/Front-und-Liegend.png",
      "/raucherzubehoer/feuerzeuge/clipper-feuerzeug-berlin-skyline/Brandenburger-Tor.png"
    ]
  },
  {
    "group-id": 2,
    "group-name": "Raucherzubehör",
    "group-slug": "raucherzubehoer",
    "subgroup-id": 5,
    "subgroup-slug": "feuerzeuge",
    "subgroup-name": "Feuerzeuge",
    "product-id": 28,
    "brand": "Clipper",
    "name": "Reibrad-Feuerzeug „Berlin“",
    "property-name": "Produktgröße in Maßeinheiten",
    "property-value": " Ø 50 mm",
    "color": "schwarz",
    "properties": "Design : Berliner Skyline",
    "description": "Du möchtest dein Nikotinverbrauch senken - kannst oder willst mit dem Rauchen nicht aufhören und suchst einen guten Ersatz für nikotinhaltigen Tabak? \n\n Wie wär’s mit der Kräutermischung von Real Leaf in der Sorte „Pineapple Express“? \n\n Er ist ein 100% natürlicher Tabakersatz mit Terpenen von der Sativa-Cannabis-Pflanze (0% THC, 0% CBD) der duftet nach einer leicht blumigen Mischung aus Apfel und Mango. Das Aroma erinnert an einen Mix aus Ananas, Kiefer und Zeder.",
    "facts": "- Inhalt eines Pouches beträgt 20g \n- Die Schnittart der Kräutermischung ist gegrindet \n- Die Mischung ist aus Himbeer-, Eibisch- und Königskerzenblätter \n- Anzahl zu möglich gedrehten Zigaretten sind circa 90.",
    "selling-price": 3.50,
    "account": 8400,
    "tax": "19,00 %",
    "buying-price": 2.00,
    "EAN": "8412765508905",
    "quantity": 41,
    "featured": false,
    "images": [
      "/raucherzubehoer/feuerzeuge/clipper-pop-comic-slogan/Gruppenfoto.png",
      "/raucherzubehoer/feuerzeuge/clipper-pop-comic-slogan/Cove-und-Feuerzeug.png"
    ]
  },
  {
    "group-id": 2,
    "group-name": "Raucherzubehör",
    "group-slug": "raucherzubehoer",
    "subgroup-id": 6,
    "subgroup-slug": "aschenbecher",
    "subgroup-name": "Aschenbecher",
    "product-id": 110,
    "brand": "Fire-Flow",
    "name": "Ashtras ( Aschenbecher) Design : „ Leaves Gold“ , Ø 0,14cm",
    "property-name": "Produktgröße in Maßeinheiten",
    "property-value": " Ø 0,14cm",
    "color": "schwarz/ gold",
    "properties": "Design : „ Leaves Gold“",
    "description": "Du möchtest dein Nikotinverbrauch senken - kannst oder willst mit dem Rauchen nicht aufhören und suchst einen guten Ersatz für nikotinhaltigen Tabak? \n\n Wie wär’s mit der Kräutermischung von Real Leaf in der Sorte „Pineapple Express“? \n\n Er ist ein 100% natürlicher Tabakersatz mit Terpenen von der Sativa-Cannabis-Pflanze (0% THC, 0% CBD) der duftet nach einer leicht blumigen Mischung aus Apfel und Mango. Das Aroma erinnert an einen Mix aus Ananas, Kiefer und Zeder.",
    "facts": "- Inhalt eines Pouches beträgt 20g \n- Die Schnittart der Kräutermischung ist gegrindet \n- Die Mischung ist aus Himbeer-, Eibisch- und Königskerzenblätter \n- Anzahl zu möglich gedrehten Zigaretten sind circa 90.",
    "selling-price": 4.00,
    "account": 8400,
    "tax": "19,00 %",
    "buying-price": 1.90,
    "EAN": "4260636141362",
    "quantity": 8,
    "featured": false,
    "images": [
      "/raucherzubehoer/aschenbecher/ashtras-aschenbecher-design-leaves-gold/Liegend.png",
      "/raucherzubehoer/aschenbecher/ashtras-aschenbecher-design-leaves-gold/Hinten.png",
      "/raucherzubehoer/aschenbecher/ashtras-aschenbecher-design-leaves-gold/Front.png"
    ]
  },
  {
    "group-id": 2,
    "group-name": "Raucherzubehör",
    "group-slug": "raucherzubehoer",
    "subgroup-id": 6,
    "subgroup-slug": "aschenbecher",
    "subgroup-name": "Aschenbecher",
    "product-id": 111,
    "brand": "Atomic",
    "name": "Autoaschenbecher Design: „Geriffelt“, schwarz-matt",
    "property-name": "Produktgröße in Maßeinheiten",
    "property-value": " 425 ml",
    "color": "schwarz",
    "properties": "Design: „Geriffelt“",
    "description": "Du möchtest dein Nikotinverbrauch senken - kannst oder willst mit dem Rauchen nicht aufhören und suchst einen guten Ersatz für nikotinhaltigen Tabak? \n\n Wie wär’s mit der Kräutermischung von Real Leaf in der Sorte „Pineapple Express“? \n\n Er ist ein 100% natürlicher Tabakersatz mit Terpenen von der Sativa-Cannabis-Pflanze (0% THC, 0% CBD) der duftet nach einer leicht blumigen Mischung aus Apfel und Mango. Das Aroma erinnert an einen Mix aus Ananas, Kiefer und Zeder.",
    "facts": "- Inhalt eines Pouches beträgt 20g \n- Die Schnittart der Kräutermischung ist gegrindet \n- Die Mischung ist aus Himbeer-, Eibisch- und Königskerzenblätter \n- Anzahl zu möglich gedrehten Zigaretten sind circa 90.",
    "selling-price": 6.50,
    "account": 8400,
    "tax": "19,00 %",
    "buying-price": 2.90,
    "EAN": "4014663753865",
    "quantity": 6,
    "featured": false,
    "images": [
      "/raucherzubehoer/aschenbecher/atomic-aschenbecher-geriffelt-schwarz-matt/oben.png",
      "/raucherzubehoer/aschenbecher/atomic-aschenbecher-geriffelt-schwarz-matt/groessenvergleich-mit-clippper.png",
      "/raucherzubehoer/aschenbecher/atomic-aschenbecher-geriffelt-schwarz-matt/geoeffnet.png",
      "/raucherzubehoer/aschenbecher/atomic-aschenbecher-geriffelt-schwarz-matt/Front-2.png",
      "/raucherzubehoer/aschenbecher/atomic-aschenbecher-geriffelt-schwarz-matt/Front.png"
    ]
  }
]

const demoGroups = [
  {
    id: 1,
    name: 'Coffeeshop TLC',
    banner: 'coffeeshop.webp',
    slug: 'coffeeshop',
    subgroups: [
      {
        id: 3,
        name: 'Tabak & Tabakersatz',
        banner: 'tabak-tabakersatz.webp',
        slug: 'tabak-tabakersatz',
        products: [],
        parent: 'coffeeshop'
      },
      {
        id: 4,
        name: 'Papes & Tip',
        banner: 'papes-tips.webp',
        slug: 'papes-tips',
        products: [],
        parent: 'coffeeshop'
      },
    ]
  },
  {
    id: 2,
    name: 'Raucherzubehör',
    banner: 'raucherzubehoer.webp',
    slug: 'raucherzubehoer',
    subgroups: [
      {
        id: 5,
        name: 'Feuerzeuge',
        banner: 'feuerzeuge.webp',
        slug: 'feuerzeuge',
        products: [],
        parent: 'raucherzubehoer'
      },
      {
        id: 6,
        name: 'Aschenbecher',
        banner: 'aschenbecher.webp',
        slug: 'aschenbecher',
        products: [],
        parent: 'raucherzubehoer'
      },
    ]
  }
]
