import SingletonExample from "../dp/creational/singleton/SingletonExample";
import FactoryExample from "../dp/creational/factory/FactoryExample";
import BuilderExample from "../dp/creational/builder/BuilderExample";
import AbstractFactoryExample from "../dp/creational/abstractFactory/AbstractFactoryExample";
import PrototypeExample from "../dp/creational/prototype/PrototypeExample";
import ObjectPoolExample from "../dp/creational/objectPool/ObjectPoolExample";

import AdapterExample from "../dp/structural/adapter/AdapterExample";
import BridgeExample from "../dp/structural/bridge/BridgeExample";
import FacadeExample from "../dp/structural/facade/FacadeExample";
import CompositeExample from "../dp/structural/composite/CompositeExample";
import DecoratorExample from "../dp/structural/decorator/DecoratorExample";
import FlyweightExample from "../dp/structural/flyweight/FlyweightExample";
import PrivateClassDataExample from "../dp/structural/privateClassData/PrivateClassDataExample";
import ProxyExample from "../dp/structural/proxy/ProxyExample";

import ChainOfResponsibilityExample from "../dp/behavioral/chainOfResponsibility/ChainOfResponsibilityExample";
import MediatorExample from "../dp/behavioral/mediator/MediatorExample";
import CommandExample from "../dp/behavioral/command/CommandExample";
import InterpreterExample from "../dp/behavioral/interpreter/InterpreterExample";
import IteratorExample from "../dp/behavioral/iterator/IteratorExample";
import MementoExample from "../dp/behavioral/memento/MementoExample";
import StrategyExample from "../dp/behavioral/strategy/StrategyExample";
import ObserverExample from "../dp/behavioral/observer/ObserverExample";
import StateExample from "../dp/behavioral/state/StateExample";
import TemplateMethodExample from "../dp/behavioral/templateMethod/TemplateMethodExample";
import VisitorExample from "../dp/behavioral/visitor/VisitorExample";
import NullObjectExample from "../dp/behavioral/nullObject/NullObjectExample";

import IExampleList from "../models/IExampleList";

const examplesList: IExampleList = {
  singleton: new SingletonExample(),
  factory: new FactoryExample(),
  builder: new BuilderExample(),
  adapter: new AdapterExample(),
  bridge: new BridgeExample(),
  facade: new FacadeExample(),
  composite: new CompositeExample(),
  chainOfResponsibility: new ChainOfResponsibilityExample(),
  mediator: new MediatorExample(),
  command: new CommandExample(),
  interpreter: new InterpreterExample(),
  iterator: new IteratorExample(),
  memento: new MementoExample(),
  strategy: new StrategyExample(),
  observer: new ObserverExample(),
  decorator: new DecoratorExample(),
  flyweight: new FlyweightExample(),
  privateClassData: new PrivateClassDataExample(),
  proxy: new ProxyExample(),
  state: new StateExample(),
  templateMethod: new TemplateMethodExample(),
  visitor: new VisitorExample(),
  nullObject: new NullObjectExample(),
  abstractFactory: new AbstractFactoryExample(),
  objectPool: new ObjectPoolExample(),
  prototype: new PrototypeExample(),
};

export default examplesList;
