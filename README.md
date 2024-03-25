# React Hierarchy Tree

simple-react-hierarchy-tree is a js library for creating hierarchy trees.

## Installation

Use the package manager (npm) to install simple-react-hierarchy-tree.

```bash
npm install simple-react-hierarchy-tree
```

## Sample parameters

```javascript
{
  content: "Company",
  items: [
    {
      content: "Sales",
      items: [
        {
          content: "operari 1"
        },
        {
          content: "operari 2"
        },
        {
          content: "operari 3"
        },
      ]
    },
    {
      content: "Production",
      items: [
        {
          content: "Warehouse 1",
          items: [
            {
              content: "warehouse 1"
            },
            {
              content: "warehouse 2"
            },
            {
              content: "warehouse 3"
            }
          ]
        },
        {
          content: "Warehouse 2",
          items: [
            {
              content: "warehouse 1"
            },
            {
              content: "warehouse 2"
            },
            {
              content: "warehouse 3"
            }
          ]
        },
        {
          content: "Warehouse 3",
          items: [
            {
              content: "warehouse 1"
            },
            {
              content: "warehouse 2"
            },
            {
              content: "warehouse 3"
            }
          ]
        },
      ]
    },
    {
      content: "Administration",
      items: [
        {
          content: "Logisitcs manager"
        },
        {
          content: "IT guy"
        },
        {
          content: "Accountants",
          items: [
            {
              content: "Accountant 1"
            },
            {
              content: "Accountant 2"
            }
          ]
        }
      ]
    }
  ]
}
 ```

## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[GPL-3.0](https://github.com/icrescenti/ReactHierarchy/blob/master/LICENSE)
