type ButtonType = {
    name: string;
    callBack: () => void;
    isDisabled: boolean;
};
export const Button = ({ name, callBack, isDisabled }: ButtonType) => {
    const onClickHandler = () => {
        callBack();
    };
    return (
        <button disabled={isDisabled} onClick={onClickHandler}>
            {name}
        </button>
    );
};
