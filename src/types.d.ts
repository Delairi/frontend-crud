type User = {
    id: string;
    name: string;
    lastname: string;
}

type ContextPopUp = {
    value: boolean;
    setValue: React.Dispatch<React.SetStateAction<boolean>>;
    formValues: User | null;
    setFormValues: React.Dispatch<React.SetStateAction<User | null>>;
};

type FormType = {
    name: string;
    lastname: string;
}