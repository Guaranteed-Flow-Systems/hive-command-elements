# Command Elements

## Structure of an element

1. Named export
```
export const DateInput = (props: { options: { onChange?: (date: Date) => void, label: string, value: Date } }) => {
    return (
        <Box sx={{flex: 1, display: 'flex'}}>
            <DatePicker 
                label={props.options?.label}
                inputFormat={`DD/MM`}
                onChange={(value) => value && props.options?.onChange?.( (value as any).toDate() )} 
                value={props.options?.value} 
                renderInput={(params) => <TextField fullWidth size="small" {...params} />} />
        </Box>
    )
}
```
2. Exported metadata
```
DateInput.metadata = {
    width: 150,
    height: 50,
    ports: [
        {
        key: 'outlet',
        type: 'source',
        momentum: 1,
        x: '80%',
        y: '30%',
        rotation: 180
        },
        {
        key: 'inlet',
        type: 'target',
        momentum: -1,
        x: '-10%',
        y: '30%'
        }
    ],
    options: {
        onChange: 'Function',
        value: 'Date',
        label: 'String'
    }
}
```

Options are provided to the props and are setup in the HiveCommand IDE to be programmable


## Adding a new element

1. Create a new Element.tsx
2. Export the new element from index.tsx
3. Build and push

## Using new element packs in HiveCommand

1. Create a new element pack
2. Set github as the provider
3. Complete the URL for the required repo https://raw.githubusercontent.com/$ORG/$REPO/$BRANCH/dist/index.js