import React, { useState } from 'react';
import SecNav from '../components/navs/SecNav';
import Stepper from '../components/wizard/Stepper';
import AccountForm from '../components/forms/signup/AccountForm';
import ChooseRole from '../components/forms/signup/ChooseRole';

const GetStartedPage = () => {
    const [formStep, setFormStep] = useState(0);

    const [selectUser, setSelectUser] = useState(true);
    const [selectOrg, setSelectOrg] = useState(false);

    const handleUserRoleClick = () => {
        setSelectOrg(false);
        setSelectUser(true);
    };

    const handleOrgRoleClick = () => {
        setSelectOrg(true);
        setSelectUser(false);
    };
    const isUser = selectUser;
    const isOrg = selectOrg;

    console.log('User:', isUser);
    console.log('Org:', isOrg);

    return (
        <div className="bg-white">
            <div className="min-h-screen py-4 mx-auto lg:max-w-screen-xl">
                <SecNav />
                <div className="flex flex-col justify-center items-center mt-12">
                    <h1 className="text-4xl font-semibold">
                        Welcome to Givers
                    </h1>
                    <p className="text-lg text-gray-400">
                        Please fill the form below to get started.
                    </p>
                </div>
                <div className="mt-5">
                    <Stepper formStep={formStep} />
                </div>
                <section>
                    <ChooseRole
                        selectUser={selectUser}
                        selectOrg={selectOrg}
                        handleUserRoleClick={handleUserRoleClick}
                        handleOrgRoleClick={handleOrgRoleClick}
                    />
                </section>
                <section>
                    <AccountForm />
                </section>
            </div>
        </div>
    );
};

export default GetStartedPage;
