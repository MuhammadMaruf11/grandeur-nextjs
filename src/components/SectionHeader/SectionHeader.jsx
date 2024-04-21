
const SectionHeader = ({ plainText, simpleText, textTheme, description }) => {
    return (
        <div className="text-center mx-auto mb-12 lg:max-w-4xl">
            <h2 className="text-4xl font-bold mb-3">
                {simpleText} <span className="text-theme">{textTheme}</span> {plainText && plainText}
            </h2>
            <p className="">{description}</p>
        </div>
    );
};

export default SectionHeader;