import { View, Text, TouchableOpacity } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import React, { useState } from "react";
import Modal from "react-native-modal";
import IcnScreenClose from "../../assets/svg/IcnScreenClose";
import { Label } from "../../utils/StringUtil";
import Style from "./IdeasFilterStyle";
import { AppUtil } from "../../utils/AppUtil";
import IcnUpArrow from "../../assets/svg/drawerIcon/IcnUpArrow";
import DownArrow from "../../assets/svg/DownArrow";
import IcnSelect from "../../assets/svg/IcnSelect";
import { useEffect } from "react";
import { GetAppColor } from "../../utils/Colors";
import { memo } from "react";
import { Loger } from "../../utils/Loger";
import { Service } from "../../service/Service";
import { EndPoints } from "../../service/EndPoints";

function IdeasFilter(props) {
  const [selectedItemList, setSelectedItemList] = useState([]);
  const [selectedCatItemList, setSelectedCatItemList] = useState([]);
  const [selectedSectorItemList, setSelectedSectorItemList] = useState([]);
  const [sectorsList, setSectorsList] = useState([]);
  const [categoriesList, setCategoriesList] = useState([]);
  const [selectorList, setSelectorList] = useState(0);
  const [catSelectorList, setCatSelectorList] = useState(0);

  const [selectedRadioButtonIndex, setSelectedRadioButtonIndex] = useState(0);
  const [selectedCatIndex, setSelectedCatIndex] = useState(false);
  const [selectedCategoriesIndex, setSelectedCategoriesIndex] = useState(false);

  useEffect(() => {
    let selectorList = sectorsList.filter((x) =>
      selectedItemList.includes(x.sector_name)
    );
    setSelectorList(selectorList.length);
    let sect = [];
    selectorList.forEach((element) => {
      sect.push(element.id);
    });
    setSelectedSectorItemList(sect);
    let catSelectorList = categoriesList.filter((x) =>
      selectedItemList.includes(x.category_name)
    );
    setCatSelectorList(catSelectorList.length);
    let cate = [];
    catSelectorList.forEach((element) => {
      cate.push(element.id);
    });
    setSelectedCatItemList(cate);
    let radioButtonValueSelection = selectedItemList.filter((x) =>
      sortByArr.includes(x)
    );
    if (radioButtonValueSelection.length == 0) setSelectedRadioButtonIndex(0);
  }, [selectedItemList]);

  useEffect(() => {
    getSectors();
    getCategories();
  }, []);

  const getSectors = () => {
    Service.get(
      EndPoints.sector,
      (res) => {
        setSectorsList(res.data);
      },
      (err) => {
      }
    );
  };

  const getCategories = () => {
    Service.get(
      EndPoints.categories,
      (res) => {
        setCategoriesList(res.data);
      },
      (err) => {
      }
    );
  };

  const onSelectOptionsList = () => {
    return selectedItemList.map((ele) => (
      <TouchableOpacity
        style={Style.selectItemBtn}
        onPress={() => onSetMultiItem(ele)}
      >
        <Text style={Style.categoryLabel}>{ele}</Text>
        <IcnScreenClose height={AppUtil.getHP(3)} width={AppUtil.getHP(3)} />
      </TouchableOpacity>
    ));
  };

  const radioButton = (index, value) => {
    return (
      <View style={Style.userTypeButtonView}>
        <TouchableOpacity
          onPress={() => onRadioButtonClick(index, value)}
          style={{ alignItems: "center" }}
        >
          {selectedRadioButtonIndex == index ? (
            <View style={Style.yellowBorderView}>
              <View style={Style.yellowFillView} />
            </View>
          ) : (
            <View style={Style.grayBorderView} />
          )}
        </TouchableOpacity>
        <Text style={Style.userTypeText}>{value}</Text>
      </View>
    );
  };

  const onRadioButtonClick = (index, value) => {
    setSelectedRadioButtonIndex(index);

    if (index != 0 && !onCheckSelectItem(value)) {
      let arr = selectedItemList;
      for (let i = 0; i < selectedItemList.length; i++) {
        if (sortByArr.includes(selectedItemList[i])) arr.splice(i, 1);
      }
      setSelectedItemList([...arr]);
      onSetMultiItem(value);
    } else if (index === 0) {
      let arr = selectedItemList;
      for (let i = 0; i < selectedItemList.length; i++) {
        if (sortByArr.includes(selectedItemList[i])) arr.splice(i, 1);
      }
      setSelectedItemList([...arr]);
    }
  };

  const onSetMultiButton = () => {
    return buttonList.map((ele) => (
      <TouchableOpacity
        style={onCheckSelectItem(ele) ? Style.btnSelect : Style.btn}
        onPress={() => onSetMultiItem(ele)}
      >
        <Text
          style={
            onCheckSelectItem(ele)
              ? Style.selectCategoryLabel
              : Style.categoryLabel
          }
        >
          {ele}
        </Text>
      </TouchableOpacity>
    ));
  };
  // Sectors
  const multiOptionSelectButton = () => {
    return (
      <View style={Style.multiButtonView}>
        {sectorsList.map((item, index) => {
          return (
            <View style={Style.userTypeButtonView}>
              <TouchableOpacity
                onPress={() => onSetMultiItem(item.sector_name)}
                style={{ alignItems: "center" }}
              >
                {onCheckSelectItem(item.sector_name) ? (
                  <View style={Style.multiSelectYellowBorderView}>
                    <IcnSelect
                      height={AppUtil.getHP(1.4)}
                      width={AppUtil.getHP(1.4)}
                    />
                  </View>
                ) : (
                  <View style={Style.multiSelectBorderView} />
                )}
              </TouchableOpacity>
              <Text style={Style.userTypeText}>{item.sector_name}</Text>
            </View>
          );
        })}
        <View style={Style.greyLine}></View>
      </View>
    );
  };

  // categories
  const multiOptionCatSelectButton = () => {
    return (
      <View style={Style.multiButtonView}>
        {categoriesList.map((item, index) => {
          return (
            <View style={Style.userTypeButtonView}>
              <TouchableOpacity
                onPress={() => onSetMultiItem(item.category_name)}
                style={{ alignItems: "center" }}
              >
                {onCheckSelectItem(item.category_name) ? (
                  <View style={Style.multiSelectYellowBorderView}>
                    <IcnSelect
                      height={AppUtil.getHP(1.4)}
                      width={AppUtil.getHP(1.4)}
                    />
                  </View>
                ) : (
                  <View style={Style.multiSelectBorderView} />
                )}
              </TouchableOpacity>
              <Text style={Style.userTypeText}>{item.category_name}</Text>
            </View>
          );
        })}
        <View style={Style.greyLine}></View>
      </View>
    );
  };
  const onCheckSelectItem = (item) => {
    let isAvailable = false;
    selectedItemList.forEach((element) => {
      if (item === element) isAvailable = true;
    });
    return isAvailable;
  };
  const onSetMultiItem = (item) => {
    if (onCheckSelectItem(item))
      setSelectedItemList(selectedItemList.filter((name) => name !== item));
    else setSelectedItemList((oldArray) => [...oldArray, item]);
  };

  return (
    <View>
      <Modal isVisible={props.visible}>
        <View style={Style.MainView}>
          <View style={Style.headerView}>
            <Text style={Style.txtTitle}>{Label.Filter}</Text>
            <TouchableOpacity onPress={() => props.onClose("", "", "")}>
              <IcnScreenClose
                height={AppUtil.getHP(5)}
                width={AppUtil.getHP(5)}
                stroke={GetAppColor.grayBorder}
              />
            </TouchableOpacity>
          </View>

          <ScrollView>
            {selectedItemList.length > 0 && (
              <View style={Style.selectItemButtonView}>
                {onSelectOptionsList()}
              </View>
            )}

            <View style={Style.bodyView}>
              <Text style={Style.txtSortBy}>{"Sort By"}</Text>
              {radioButton(0, sortByArr[0])}
              {radioButton(1, sortByArr[1])}
              {radioButton(2, sortByArr[2])}
              {/* {radioButton(3, sortByArr[3])}
              {radioButton(4, sortByArr[4])} */}
            </View>

            {/* <View style={Style.buttonView}>
                            {onSetMultiButton()}
                        </View> */}

            {props.type === "Challange" ? null : (
              <>
                <TouchableOpacity
                  onPress={() => {
                    setSelectedCatIndex(!selectedCatIndex);
                  }}
                  style={Style.menuButton}
                >
                  <Text style={Style.txtSortBy}>
                    {"Sectors (" + selectorList + ")"}
                  </Text>
                  {selectedCatIndex ? (
                    <IcnUpArrow
                      height={AppUtil.getHP(2)}
                      width={AppUtil.getHP(2)}
                    />
                  ) : (
                    <DownArrow
                      height={AppUtil.getHP(2)}
                      width={AppUtil.getHP(2)}
                    />
                  )}
                </TouchableOpacity>
                {selectedCatIndex && multiOptionSelectButton()}
              </>
            )}

            <TouchableOpacity
              onPress={() => {
                setSelectedCategoriesIndex(!selectedCategoriesIndex);
              }}
              style={Style.menuButton}
            >
              <Text style={Style.txtSortBy}>
                {"Categories (" + catSelectorList + ")"}
              </Text>
              {selectedCategoriesIndex ? (
                <IcnUpArrow
                  height={AppUtil.getHP(2)}
                  width={AppUtil.getHP(2)}
                />
              ) : (
                <DownArrow height={AppUtil.getHP(2)} width={AppUtil.getHP(2)} />
              )}
            </TouchableOpacity>

            {selectedCategoriesIndex && multiOptionCatSelectButton()}

            <View style={Style.bottomBlacker} />
          </ScrollView>

          <TouchableOpacity
            onPress={() =>
              props.onClose(
                selectedCatItemList,
                selectedSectorItemList,
                selectedRadioButtonIndex
              )
            }
            style={Style.btnApply}
          >
            <Text style={Style.txtButton}>{"Apply Filter"}</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
}

export default memo(IdeasFilter);

const sortByArr = [
  "Default",
  "Name(A-Z)",
  "Name(Z-A)",
  //   "Rating(Highest)",
  //   "R ating(Lowest)",
];
const buttonList = [
  "Latest",
  "Popular",
  "Winning",
  "Madarek Spotlight",
  "Favourite",
];
const selectorItemList = [
  "Sector Sector 1",
  "Sector Ipsm lorem 2",
  "Sector A",
  "Aviation",
  "Banking and Finance",
  "Child Level Cat",
  "Constuctuion and Infrastucture",
  "Corporate Category",
];
