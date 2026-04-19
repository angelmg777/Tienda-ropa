export default {
    name: 'product',
    title: 'Producto',
    type: 'document',
    fields: [
      {
        name: 'name',
        title: 'Nombre del producto',
        type: 'string',
        validation: Rule => Rule.required()
      },
      {
        name: 'slug',
        title: 'Slug (URL)',
        type: 'slug',
        options: { source: 'name' },
        validation: Rule => Rule.required()
      },
      {
        name: 'gender',
        title: 'Género',
        type: 'string',
        options: {
          list: [
            { title: 'Hombre', value: 'hombre' },
            { title: 'Mujer', value: 'mujer' },
            { title: 'Unisex', value: 'unisex' }
          ],
          layout: 'radio'
        },
        validation: Rule => Rule.required()
      },
      {
        name: 'category',
        title: 'Categoría',
        type: 'string',
        options: {
          list: [
            { title: 'Pantalones', value: 'pantalones' },
            { title: 'Pants', value: 'pants' },
            { title: 'Calcetines', value: 'calcetines' },
            { title: 'Gorras', value: 'gorras' },
            { title: 'Mochilas', value: 'mochilas' },
            { title: 'Sudaderas', value: 'sudaderas' },
            { title: 'Playeras', value: 'playeras' },
            { title: 'Perfumes', value: 'perfumes' },
            { title: 'Fajos', value: 'fajos' },
            { title: 'Tennis', value: 'tennis' },
            { title: 'Boxers', value: 'boxers' },
            { title: 'Shorts', value: 'shorts' }
          ]
        },
        validation: Rule => Rule.required()
      },
      {
        name: 'price',
        title: 'Precio',
        type: 'number',
        validation: Rule => Rule.required().min(0)
      },
      {
        name: 'description',
        title: 'Descripción',
        type: 'text',
        rows: 4
      },
      {
        name: 'images',
        title: 'Imágenes',
        type: 'array',
        of: [{ type: 'image', options: { hotspot: true } }],
        validation: Rule => Rule.required().min(1)
      },
      {
        name: 'isUnitalla',
        title: '¿Es unitalla?',
        type: 'boolean',
        initialValue: false
      },
      {
        name: 'sizes',
        title: 'Tallas disponibles',
        type: 'array',
        of: [{ type: 'string' }],
        options: {
          list: [
            { title: 'XS', value: 'XS' },
            { title: 'S', value: 'S' },
            { title: 'M', value: 'M' },
            { title: 'L', value: 'L' },
            { title: 'XL', value: 'XL' },
            { title: 'XXL', value: 'XXL' },
            { title: 'XXXL', value: 'XXXL' },
            { title: '26', value: '26' },
            { title: '28', value: '28' },
            { title: '30', value: '30' },
            { title: '32', value: '32' },
            { title: '34', value: '34' },
            { title: '36', value: '36' }
          ]
        },
        hidden: ({ document }) => document?.isUnitalla === true
      },
      {
        name: 'inStock',
        title: '¿Disponible?',
        type: 'boolean',
        initialValue: true
      },
      {
        name: 'featured',
        title: '¿Producto destacado?',
        type: 'boolean',
        initialValue: false
      }
    ]
  }