interface Props {
    mainText: string;
    subText?: string;
    subText2?: string;
}

function Title({ mainText, subText ,subText2 }: Props) {
    return (
        <h2 className="text-center my-3">
            {mainText}<br />
            {subText &&
                <small className="text-muted">
                    {subText}<br/>
                </small>
            }
            {subText2 &&
                <small className="text-muted">
                    {subText2}
                </small>
            }
        </h2>
    );
}

export default Title;