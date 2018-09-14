export const flex = ({ direction = 'column', justify = 'center', align = 'center' }) => `
    display: flex;
    flex-direction: ${direction};
    justify-content:${justify};
    align-items: ${align};
`;
export const absolute = ({ y = 'top', x = 'left' }) => `
    position: absolute;
    ${y}:0;
    ${x}:0;
`;
