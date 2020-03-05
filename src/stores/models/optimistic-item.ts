import {observable} from "mobx";
import {revertible, setter} from "mobx-easy";
import {notification} from "antd";

const wait = (shouldFail: boolean, time: number) => new Promise((resolve, reject) => setTimeout(() => shouldFail ? reject() : resolve(), time));

interface OptimisticItem {
    setTitle: (title: string) => void;
    revert: (propName: keyof OptimisticItem) => void;
}

@revertible(['title'])
class OptimisticItem {
    @setter('setTitle')
    @observable
    title: string;

    constructor(titleName: string) {
        this.title = titleName;
    }

    updateOptimisticSuccess = async (title : string) => {
        this.setTitle(title);
        await wait(false, 500);
        notification.success({
            message: 'Success!',
            placement: 'bottomRight'
        })
    }

    updateOptimisticFail = async (title : string) => {
        this.setTitle(title);
        try {
            await wait(true, 500);
        } catch(e) {
            notification.error({
                message: 'Failed ! Reverting!',
                placement: 'bottomRight'
            });
            this.revert('title');
        }
    }
}

export default OptimisticItem;