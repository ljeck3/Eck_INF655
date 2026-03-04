import { useState } from "react";

function Counter() {
    const [count, updateCount] = useState(0);

    return (
        <div>
            <p>{count}</p>
            <div>
                <button
                    type="button"
                    onClick={() => updateCount(count+1)}>Click Me
                </button>
            </div>
        </div>
    );
}

export default Counter;
