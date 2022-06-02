import React from 'react';
import { Modal } from 'react-native';


export const CustomModal = ({children, animationType, visible}) => (
    <Modal 
        animationType={animationType}
        visible={visible}
        onRequestClose={() => null}
        >
            {children}
        </Modal>
);