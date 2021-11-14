import React, {useState} from "react";
import {Button} from 'samespace-zen'

const ReportActivityButton = ({opacity}) => {
    
    return(
        <>
            <Button
                title="View Activity"
                size="small"
                shape="rounded"
                type="lined"
                className={opacity}
            />
        </>
    )
}

export default ReportActivityButton;