
export function AddonFormComponent() {
    const addon_option = [
        {id: 0, addon_name: 'Online service',addon_description: 'Access to multiplayer games',addon_mon_price: 1,isSelected: false},
        {id: 1, addon_name: 'Larger storage',addon_description: 'Extra 1TB of cloud save',addon_mon_price: 2,isSelected: false},
        {id: 2, addon_name: 'Customizable Profile',addon_description: 'Custom theme on your profile',addon_mon_price: 2,isSelected: false},
    ]

    return (
        <>
        <div className="addon-container">
            <div className="addon-container_header">
                <h1>Pick add-ons</h1>
                <div>Add-ons help enhance your gaming experience</div>
            </div>

            <div className="addon-container_options">
                {
                    addon_option.map((item, index) => {
                        return (
                            <div className={item.isSelected ?'options-card-selected' :'options-card'} key={item.id}>
                                <div className="cont1">
                                    <input type="checkbox"></input>
                                </div>
                                <div className="cont2">
                                    <div className="cont2_addon">
                                        <div className="addon_name">{item.addon_name}</div>
                                        <div>{item.addon_description}</div>
                                    </div>
                                </div>
                                <div className="addon_price">
                                    +${item.addon_mon_price}/mo
                                </div>
                            </div>
                        );
                    })
                }
            </div>
        </div>
        </>
    );
}