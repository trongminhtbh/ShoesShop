import React from "react";
import {Navigation} from 'react-minimal-side-navigation';
import 'react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css';

function SideBar(props){
    const {listBrands, showPanel} = props
    const brands = listBrands.reduce((items, brand) => {
      let item = {
        title: brand,
        itemId: brand
      }
      items.push(item)
      return items
    },[])
    console.log(listBrands)
    return (

          <div className="fixed menu">
            <Navigation
                // you can use your own router's api to get pathname
                activeItemId="/management/members"
                onSelect={({itemId}) => {
                  showPanel(itemId)
                }}
                items={[
                  {
                    title: 'All items',
                    itemId: 'All',
                    // you can use your own custom Icon component as well
                    // icon is optional
                  },
                  {
                    title: 'Branch',
                    itemId: '/branch',
                    subNav: brands,
                  },
                  {
                    title: 'Gender',
                    itemId: '/gender',
                    subNav: [
                      {
                        title: 'Male',
                        itemId: '/gender/male',
                      },
                      {
                        title: 'Female',
                        itemId: '/gender/Female',
                      },
                    ],
                  },
                  {
                      title: 'Accessory',
                      itemId: '/accessory'
                  }
                ]}
              />
          </div>
      );
};

export default SideBar;