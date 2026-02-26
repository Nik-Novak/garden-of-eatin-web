import Image from "next/image";
import styles from "./page.module.css";
import constants from '../../../CONSTANTS.json';

export default function Home() {
  return constants.version;
}
