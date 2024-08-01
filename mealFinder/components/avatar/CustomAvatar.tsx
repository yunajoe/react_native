import {Avatar} from '@rneui/themed';

import React from 'react';

function CustomAvatar() {
  return (
    <Avatar
      size={64}
      rounded
      source={{
        uri: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png',
      }}
      containerStyle={{backgroundColor: 'orange'}}>
      <Avatar.Accessory
        size={24}
        source={{
          uri: 'https://cdn.pixabay.com/photo/2017/11/10/05/24/upload-2935442_1280.png',
        }}
      />
    </Avatar>
  );
}

export default CustomAvatar;
