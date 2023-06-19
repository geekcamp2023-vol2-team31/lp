import Styles from "./developer.module.scss";
import {Card} from "@/components/developer/card";

const Developer = () => {
  return <div className={Styles.wrapper}>
    <Card src={"/developer-mgn901.png"} username={"めがね901"} bio={"設計が好き。アーキテクチャもUIも。"}/>
    <Card src={"/developer-xpadev.jpg"} username={"xpadev"} bio={"そこら辺の学生"}/>
    <Card src={"/developer-yajima.jpg"} username={"矢島 創一"} bio={"和室に住んでいる"}/>
    <Card src={"/developer-mgn901.png"} username={"きとけん"} bio={"栄養士エンジニア、鯖味噌が好物"}/>
    <Card src={"/developer-satojin.png"} username={"佐藤 仁"} bio={"栄養士エンジニア、鯖味噌が好物"}/>
  </div>
}

export {Developer};