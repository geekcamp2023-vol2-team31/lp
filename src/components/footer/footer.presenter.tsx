import {Logo} from "@/assets/logo";
import Styles from "./footer.module.scss";

const Footer = () => {
  return (<div className={Styles.footer}>
    <Logo className={Styles.logo} color={"white"}/>
  </div>)
}

export {Footer};