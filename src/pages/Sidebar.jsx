import React from "react";
import {Navigation} from 'react-minimal-side-navigation';
import 'react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css';

function SideBar(){

    return (

          <div className="fixed menu">
            <Navigation
                // you can use your own router's api to get pathname
                activeItemId="/management/members"
                onSelect={({itemId}) => {
                }}
                items={[
                  {
                    title: 'All items',
                    itemId: '/allitems',
                    // you can use your own custom Icon component as well
                    // icon is optional
                  },
                  {
                    title: 'Branch',
                    itemId: '/branch',
                    subNav: [
                      {
                        title: 'Nike',
                        itemId: 'NikeSection',
                        // Requires v1.9.1+ (https://github.com/abhijithvijayan/react-minimal-side-navigation/issues/13)
                      },
                      {
                        title: 'Adidas',
                        itemId: '/branch/adidas',
                      },
                    ],
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