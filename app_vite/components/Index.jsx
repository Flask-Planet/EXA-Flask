import {createSignal, For, onMount} from "solid-js";
import {wrpc} from "wrpc-js";

export default function Index() {

    const [owners, setOwners] = createSignal([])
    const [cars, setCars] = createSignal({})
    const [boats, setBoats] = createSignal({})

    function addExampleData() {
        fetch('http://127.0.0.1:6600/rpc/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: wrpc('add_example_data', null)
        })
    }

    onMount(() => {
        fetch('http://127.0.0.1:6600/rpc/owners/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: wrpc('get_all_owners', null)
        })
            .then(response => response.json())
            .then(data => {
                setOwners(data.data)
            })
    })

    return (
        <div className={'p-6'}>
            <h1>Example</h1>
            <div className={'flex flex-col gap-1 p-4 m-4 rounded-md bg-gray-200'}>
                <form>
                    <button role={'button'} onClick={() => addExampleData()}>
                        Add Example Data</button>
                </form>
            </div>
            <div className={'flex flex-col gap-1 p-4 m-4 rounded-md bg-gray-200'}>
                <h2>Owners</h2>
                <div className={'pb-4'}>
                    <table className={'text-left'} cellpadding={'5'}>
                        <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                        </tr>
                        </thead>
                        <tbody>
                        <For each={owners()}>{(owner) =>
                            <tr>
                                <td>{owner.owner_id}</td>
                                <td>{owner.name}</td>
                            </tr>
                        }
                        </For>
                        </tbody>
                    </table>
                </div>
                <div>
                    <form>
                        <label>Add Owner
                            <input type="text" name={'owner'}/>
                        </label>
                        <button role={'button'}>Add</button>
                    </form>
                </div>
            </div>
            <div className={'flex flex-col gap-1 p-4 m-4 rounded-md bg-gray-200'}>
                <h2>Cars</h2>
                <div className={'pb-4'}>
                    <table className={'text-left'} cellpadding={'5'}>
                        <thead>
                        <tr>
                            <th>Make</th>
                            <th>Model</th>
                            <th>Owner</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>John Doe</td>
                            <td>John Doe</td>
                            <td>John Doe</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                <div>
                    <form>
                        <label>Add Car
                            <input type="text" name={'owner'}/>
                        </label>
                        <button role={'button'}>Add</button>
                    </form>
                </div>
            </div>
            <div className={'flex flex-col gap-1 p-4 m-4 rounded-md bg-gray-200'}>
                <h2>Boats</h2>
                <div className={'pb-4'}>
                    <table className={'text-left'} cellpadding={'5'}>
                        <thead>
                        <tr>
                            <th>Make</th>
                            <th>Model</th>
                            <th>Owner</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>John Doe</td>
                            <td>John Doe</td>
                            <td>John Doe</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                <div>
                    <form>
                        <label>Add Boat
                            <input type="text" name={'owner'}/>
                        </label>
                        <button role={'button'}>Add</button>
                    </form>
                </div>
            </div>
        </div>
    )

}