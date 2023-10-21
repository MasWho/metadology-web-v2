export const generateClasses = (params: {
    generic: string[];
    mobile: string[];
    web: string[];
  }) => {
    const { generic, mobile, web } = params;
    const classes = [...generic, ...mobile, ...web];
    return classes.join(" ");
  };
  