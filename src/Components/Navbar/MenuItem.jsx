import { Menu } from '@headlessui/react';
const MenuItem = (props) => {
    return (
        <>
            <div className="py-2 hover:bg-blue-500 hover:text-white hover:px-2 hover:rounded" >
                <Menu.Item>
                    <p>{props.name}</p>
                </Menu.Item>
            </div>
        </>
    );
}
export default MenuItem;