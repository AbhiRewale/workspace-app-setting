import React from 'react';
import { Tabs, SearchBar,Button } from 'samespace-zen'


const ReportTabs = () => {
    return (
        <>
            <div className="flex items-center justify-between">
                <Tabs
                    activeItem="users"
                    items={[
                        {
                            label: 'Daily',
                            value: 'daily'
                        },
                        {
                            label: 'Users',
                            value: 'users'
                        },
                        {
                            label: 'Teams',
                            value: 'teams'
                        },
                        {
                            label: 'Projects',
                            value: 'projects'
                        }
                    ]}
                    onClick={function noRefCheck() { }}
                />
                
                <div className="flex space-x-2 items-center justify-evenly">
                <SearchBar 
                    shape="rounded"
                    placeholder="Search by name"
                />
                <Button
                    title="Export"
                    shape="rounded"
                    size="small"
                    type="muted"
                    accent="contrast"
                />
                </div>
            </div>
        </>
    )
}

export default ReportTabs