/** default */
import styled from "styled-components";
import React from "react";
export { styled, React };

/** modules */
export {
  memo,
  forwardRef,
  lazy,
  useRef,
  useEffect,
  useState,
  useCallback,
  useContext,
  createContext,
} from "react";

export { styleCreator } from "../tools/styleCreator";

export {
  BrowserRouter as Router,
  Switch,
  Route,
  withRouter,
  Link as RouterLink,
} from "react-router-dom";

export { createBrowserHistory as history } from "history";

export {
  Form,
  Button,
  ListGroup,
  Modal,
  InputGroup,
  Tab,
  Nav,
} from "react-bootstrap";

export { v4 as uuidV4 } from "uuid";

/** components */
export { Text } from "../components/atoms/Text";
export { View } from "../components/atoms/View";

/** organism */
export { Login } from "../components/organisms/Login";
export { useLocalStorage } from "../hooks/useLocalStorage";
export { Dashboard } from "../components/organisms/Dashboard";
export { Sidebar } from "../components/organisms/Sidebar";
export { OpenConversation } from "../components/organisms/OpenConversation";
export { Conversations } from "../components/organisms/Conversations";
export { Contacts } from "../components/organisms/Contacts";
export { NewContactModal } from "../components/organisms/NewContactsModal";
export { NewConversationModal } from "../components/organisms/NewConversationModal";

/** types */
export type {
  ReactElement,
  RefObject,
  SetStateAction,
  FunctionComponent,
  JSXElementConstructor,
} from "react";
export type { ViewProps } from "../components/atoms/View/types";

/** providers */

export { ContactsProvider } from "../provider/ContactsProvider";
export { ConversationsProvider } from "../provider/ConversationsProvider";
export { SocketProvider } from "../provider/SocketProvider";
