import { View, Text, TouchableOpacity, TextInput } from "react-native";
import React, { memo, useState } from "react";
import { Label } from "../../utils/StringUtil";
import Style from "./IdeaStepStyle";
import { useSelector, useDispatch } from "react-redux";
import { GetAppColor } from "../../utils/Colors";
import IcnNext from "../../assets/svg/IcnNext";

import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from "react-native-popup-menu";
import { AppUtil } from "../../utils/AppUtil";
import { AppConfig, getLanguage } from "../../manager/AppConfig";

function CustomList(props) {
  const _lang = getLanguage();

  const [title, setTitle] = useState(
    props?.currentItem != "" ? props?.currentItem : Label.Selected
  );

  return (
    <Menu>
      <MenuTrigger>
        <View
          style={
            props?.isType === "Submit"
              ? Style.selectMenuTitle2
              : Style.selectMenuTitle1
          }
        >
          <Text
            style={
              props?.isType === "Submit"
                ? Style.txtIdeasTitle
                : Style.txtDrowerTitle
            }
          >
            {title}
          </Text>
          <IcnNext
            style={[
              Style.headerLeftIcn,
              { transform: [{ rotate: _lang == "ar" ? "180deg" : "0deg" }] },
            ]}
            height={AppUtil.getHP(2.4)}
            width={AppUtil.getHP(2.4)}
          />
        </View>
      </MenuTrigger>

      <MenuOptions>
        {props?.item?.map((item) => {
          return (
            <MenuOption
              onSelect={() => {
                props.onSelect(item);
                setTitle(item.itemName);
              }}
            >
              <Text>{item.itemName}</Text>
            </MenuOption>
          );
        })}
      </MenuOptions>
    </Menu>
  );
}

export default memo(CustomList);
