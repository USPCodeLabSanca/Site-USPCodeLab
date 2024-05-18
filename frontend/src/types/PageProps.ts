
/* Interface para props com parametros e children 
uso:
>>> const MyComponent 
*/
export interface UniversalChldrenPageProps extends React.HTMLProps<HTMLDivElement> { // template para definir props (com children)
    // definir as props aqui
}


export interface UniversalPageProps { // template para definir props **sem children**
    // definir as props aqui
}