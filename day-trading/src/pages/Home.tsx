import { NavbarBackground } from '../components/home/background'
import { SignBackground } from '../components/sign_in/background'
import logo from '../assets/logo/Carbs_light.svg'
import wallet from '../assets/logo/Wallet_duotone_line.svg'
import download from '../assets/logo/Load_circle.svg'
import lable from '../assets/logo/lable_duotone.svg'
import paper from '../assets/logo/Paper_duotone_line.svg'
import user from '../assets/logo/User_circle.svg'
import {
    DataContainer,
    DataTextContainer,
    DataValue,
    UserContainer,
    UserTextContainer,
    DataName,
} from '../components/home/containers'
import { StatusCard } from '../components/home/card'
import { Header1, Header2 } from '../components/atoms/fonts'

export const Home = () => {
    return (
        <div>
            <NavbarBackground>
                <UserTextContainer>
                    <img src={logo} />
                    <Header1>DTA</Header1>
                </UserTextContainer>
                <UserContainer>
                    <UserTextContainer>
                        <Header2>John Smith</Header2>
                        <img src={user} />
                    </UserTextContainer>
                </UserContainer>
            </NavbarBackground>
            <SignBackground>
                <StatusCard>
                    <DataContainer>
                        <img src={wallet} />
                        <DataTextContainer>
                            <DataValue>$5,912</DataValue>
                            <DataName>Trading Balance</DataName>
                        </DataTextContainer>
                    </DataContainer>
                    <DataContainer>
                        <img src={download} />
                        <DataTextContainer>
                            <DataValue>$8,426</DataValue>
                            <DataName>Investment</DataName>
                        </DataTextContainer>
                    </DataContainer>
                    <DataContainer>
                        <img src={lable} />
                        <DataTextContainer>
                            <DataValue>185%</DataValue>
                            <DataName>Rate of Return</DataName>
                        </DataTextContainer>
                    </DataContainer>
                    <DataContainer>
                        <img src={paper} />
                        <DataTextContainer>
                            <DataValue>419</DataValue>
                            <DataName>Number of Trades</DataName>
                        </DataTextContainer>
                    </DataContainer>
                </StatusCard>
            </SignBackground>
        </div>
    )
}