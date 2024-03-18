const AddIcon = ({color}: {color: string}) => {
    return (
        <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13 8.59277V17.3844" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M17.3999 12.9886H8.59985" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M18.6229 1H7.37714C3.45714 1 1 3.7745 1 7.70219V18.2978C1 22.2255 3.44571 25 7.37714 25H18.6229C22.5543 25 25 22.2255 25 18.2978V7.70219C25 3.7745 22.5543 1 18.6229 1Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    )
};

export default AddIcon;