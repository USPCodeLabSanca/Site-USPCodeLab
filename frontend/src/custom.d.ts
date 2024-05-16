declare module "*.svg" {
    const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
    export default content;

}
declare module "*.png"
// permite a importacao direta de arquivos svg e png no typecript