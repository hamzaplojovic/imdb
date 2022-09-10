import { useStyles } from "../SimpleSearch/SearchStyles";
import { TextInput } from "@mantine/core";
const inputdata = ["Title", "Genre", "Company", "Title Type", "Title Group"];

type DataType = {
    Title: string;
    Genre: string;
    Company: string;
    TitleType: string;
    TitleGroup: string;
};

export const AdvancedSearchInputs = (props: {
    data: any;
    setData: React.Dispatch<React.SetStateAction<DataType>>;
}) => {
    const { classes } = useStyles();

    return (
        <>
            {inputdata.map((item) => {
                return (
                    <TextInput
                        key={item}
                        placeholder={item}
                        className={classes.advancedinput}
                        value={props.data[item]}
                        onChange={(
                            e: React.ChangeEvent<HTMLInputElement>
                        ): void => {
                            props.setData((oldData) => ({
                                ...oldData,
                                [item]: e.target.value,
                            }));
                        }}
                    />
                );
            })}
        </>
    );
};
