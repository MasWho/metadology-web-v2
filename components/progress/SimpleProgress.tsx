const ProgressBar = (props: any) => {
    const { bgcolor, completed } = props;

    const completedNormalised = Math.floor(completed * 100) + 1
  
    const containerStyles = {
      height: 20,
      width: '100%',
      backgroundColor: "#e0e0de",
      borderRadius: 50,
      margin: 50
    }
  
    const fillerStyles: any = {
      height: '100%',
      width: `${completedNormalised}%`,
      backgroundColor: bgcolor,
      borderRadius: 'inherit',
      textAlign: 'right',
      transition: 'width 1s ease-in-out',
    }
  
    const labelStyles = {
      padding: 5,
      color: 'white',
      fontWeight: 'bold'
    }
  
    return (
      <div style={containerStyles}>
        <div style={fillerStyles}>
          <span style={labelStyles}>{`${completedNormalised}%`}</span>
        </div>
      </div>
    );
  };
  
  export default ProgressBar;