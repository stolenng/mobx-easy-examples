import React, {useState} from 'react';
import {useObserver} from "mobx-react-lite";
import {useStore} from "../stores/helpers/use-store";
import RootStore from "../stores/root-store";
import UserStore from "../stores/user-store";
import {Button, Card, List, Input} from "antd";
import User from "../stores/models/user";

const UserComponent = () => {
    const userStore = useStore((rootStore: RootStore) => rootStore.userStore) as UserStore;
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    return useObserver(() => {
        const items = userStore.getAll;

        return (
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <Card style={{width: '30%'}}>
                    <List
                        dataSource={items}
                        rowKey='id'
                        renderItem={(item: User) => (
                            <div>
                                <span>{`${item.id} - ${item.name} ${item.laseName}`}</span>
                                <span style={{marginLeft: '5px', cursor: 'pointer', color: 'red'}} onClick={() => userStore.remove(item.id)}>X</span>
                            </div>
                        )}
                    />
                </Card>

                <div style={{width: '30%'}}>
                    First Name:
                    <Input value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
                </div>
                <div style={{width: '30%'}}>
                    Last Name:
                    <Input value={lastName} onChange={(e) => setLastName(e.target.value)}/>
                </div>
                <div style={{width: '30%'}}>
                    <Button onClick={() => userStore.add(new User(firstName, lastName))}>
                        Add
                    </Button>
                </div>
            </div>
        )
    });
};

export {
    UserComponent
};