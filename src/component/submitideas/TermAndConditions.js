import React, { memo, useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { GetAppColor } from '../../utils/Colors';
import { Label } from '../../utils/StringUtil';
import Style from './IdeaStepStyle'
import IcnSelect from "../../assets/svg/IcnSelect";
import { AppUtil } from '../../utils/AppUtil';

const TermAndConditions = (props) => {

  const [isCheckedOne, setCheckedOne] = useState(false);
  return (
    <View style={Style.innerSecondView5}>
      <TouchableOpacity onPress={() => setCheckedOne(!isCheckedOne)} style={{ alignItems: "center" }}>
        {
          isCheckedOne ?
            (
              <View style={Style.multiSelectYellowBorderView}>
                <IcnSelect height={AppUtil.getHP(1.4)} width={AppUtil.getHP(1.4)} />
              </View>
            )
            :
            (
              <View style={Style.multiSelectBorderView} />
            )}
      </TouchableOpacity>
      {props.isClick ?
        <Text style={[Style.txtTitle, { marginStart: 5, marginEnd: 10 }]}>{props.title}{props.required == "Y" && <Text style={Style.txtStar}>*</Text>}</Text>
        :
        <Text style={[Style.txtTitle, { marginStart: 5, marginEnd: 10 }]}>{props.title}{props.required == "Y" && <Text style={Style.txtStar}>*</Text>}</Text>
      }
    </View>
  )
}

export default memo(TermAndConditions);