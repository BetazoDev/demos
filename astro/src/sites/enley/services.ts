import { constitucion, marca } from "./services-a";
import { repse, contaduria, constancia } from "./services-b";
import { divorcio } from "./services-c";
import type { Service } from "./data";

export const services: Service[] = [constitucion, marca, repse, contaduria, constancia, divorcio];
