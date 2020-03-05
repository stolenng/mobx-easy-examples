import React, {useState} from 'react';
import {useStore} from "../stores/helpers/use-store";
import OptimisticStore from "../stores/optimistic-store";
import {useObserver} from "mobx-react-lite";
import {Button, Input} from "antd";

const Optimistic = () => {
    const [text, setText] = useState('');
    const {item} = useStore((rootStore) => rootStore.optimisticStore) as OptimisticStore;

    return useObserver(() => (
        <div className="margins">
            <div>
                Current Title: {item.title}
            </div>
            <div>
                <Input style={{width: '30%'}} value={text} onChange={(e) => setText(e.target.value)} />
            </div>
            <div>
                <Button onClick={() => item.updateOptimisticSuccess(text)}>Success Example</Button>
                <Button onClick={() => item.updateOptimisticFail(text)}>Fail Example</Button>
            </div>
        </div>
    ))
};

export {
    Optimistic
}