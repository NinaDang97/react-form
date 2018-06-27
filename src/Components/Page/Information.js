import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import Input from '../Form/Input';
import Textarea from '../Form/Textarea';
import Error from '../Error';

class Information extends Component {    
    state = {
        fullName: '',
        email: '',
        reEmail: '',
        phone: '',
        address: '',
        city: '',
        state: '',
        country: '',
        zip: '',
        know_about_us: '',
        isTouched: {
            fullName: false,
            email: false,
            reEmail: false,
            phone: false,
            address: false,
            city: false,
            country: false,
        }
    }
    
    componentDidMount() {
        this.setState(prevState => ({
            ...prevState,
            ...this.props.info
        }))
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    } 

    handleBlur = (event) => {
        const field = event.target.name;
        this.setState(prevState => ({
            isTouched: {
                ...prevState.isTouched,
                [field]: true
            }
        }));
    }

    validateInfo = (fullName, email, reEmail, phone, address, city, country) => {
        const regexFullName = /^[A-Za-z]+\s[A-Za-z]+$/;
        const regexEmail = /^\w+(\.\w+)?@\w{2,5}\.[a-z-]{2,}(\.\w{2,})?$/;
        const regexPhone = /^0\d{8,13}/;
        const regexAddress = /^[A-Za-z]+\s[A-Za-z\d\s]+$/;
        const regexCity = /^[A-Za-z]+\s?[A-Za-z]*$/;
        const regexCountry = /^[A-Za-z]+\s?[A-Za-z]*$/;

        const errorInfo = {
            fullName: regexFullName.test(fullName)
                ? ''
                : 'Invalid full name',
            email: regexEmail.test(email)
                ? ''
                : 'Invalid email',
            reEmail: email !== '' && reEmail === email
                ? ''
                : 'Emails do not match',
            phone: regexPhone.test(phone)
                ? ''
                : 'Invalid phone number',
            address: regexAddress.test(address)
                ? ''
                : 'Invalid street address',
            city: regexCity.test(city)
                ? ''
                : 'Invalid city',
            country: regexCountry.test(country)
                ? ''
                : 'Invalid country'
            }
        return errorInfo;
    }

    render() {               
        const {
            fullName, email, reEmail, phone, address, city, state, country, zip, know_about_us,
            isTouched,
        } = this.state; 
        const errorInfo = this.validateInfo(fullName, email, reEmail, phone, address, city, country);
        return (
            <div className="personal-info">
                <h3>Personal Information</h3>
                <div className="info info-col-01">
                    <div className="left">
                        <Input 
                            type="text" 
                            className={(isTouched.fullName && errorInfo.fullName) ? 'invalid' : ''} 
                            name='fullName' 
                            value={fullName}
                            onChange={this.handleChange} 
                            onBlur={this.handleBlur}
                            placeholder="Full name*" />
                        {isTouched.fullName && <Error inputType={errorInfo.fullName} />}

                        <Input 
                            type="email" 
                            className={(isTouched.email && errorInfo.email) ? 'invalid' : ''} 
                            name='email'
                            value={email} 
                            onChange={this.handleChange} 
                            onBlur={this.handleBlur}
                            placeholder="Email*" />
                        {isTouched.email && <Error inputType={errorInfo.email} />}

                        <Input 
                            type="tel" 
                            className={(isTouched.phone && errorInfo.phone) ? 'invalid' : ''} 
                            name='phone' 
                            value={phone}
                            onChange={this.handleChange} 
                            onBlur={this.handleBlur}
                            placeholder="Phone#*" />
                        {isTouched.phone && <Error inputType={errorInfo.phone} />}
                    </div>
                    <div className="right">
                        <Input 
                            type="email" 
                            className={(isTouched.reEmail && errorInfo.reEmail) ? 'invalid' : ''} 
                            name='reEmail' 
                            value={reEmail}
                            onChange={this.handleChange} 
                            onBlur={this.handleBlur}
                            placeholder="Re-enter email*" />
                        {isTouched.reEmail && <Error inputType={errorInfo.reEmail} />}
                    </div>
                </div>
                <div className="info info-col-02">
                    <div className="top">
                        <Textarea
                            className={(isTouched.address && errorInfo.address) ? 'invalid input' : 'input'}
                            name='address'
                            value={address}
                            onChange={this.handleChange}
                            onBlur={this.handleBlur}
                            placeholder="Address*"
                        />                        
                        {isTouched.address && <Error inputType={errorInfo.address} />}
                    </div>       
                    <div className="bottom-inline">
                        <Input 
                            type="text" 
                            className={(isTouched.city && errorInfo.city) ? 'invalid' : ''} 
                            name='city' 
                            value={city}
                            onChange={this.handleChange} 
                            onBlur={this.handleBlur}
                            placeholder="City*" />
                        {isTouched.city && <Error inputType={errorInfo.city} />}

                        <Input 
                            type="text" 
                            name='state'
                            value={state}
                            onChange={this.handleChange} 
                            placeholder="State" />

                        <Input 
                            type="text" 
                            className={(isTouched.country && errorInfo.country) ? 'invalid' : ''} 
                            name='country' 
                            value={country}
                            onChange={this.handleChange} 
                            onBlur={this.handleBlur}
                            placeholder="Country/Region*" />
                        {isTouched.country && <Error inputType={errorInfo.country} />}

                        <Input 
                            type="text" 
                            name='zip'
                            value={zip}
                            onChange={this.handleChange}
                            placeholder="Zip/Postal code" />
                    </div>
                </div>
                <div className="info info-col-3">
                    <Input 
                        type="text" 
                        name='know_about_us'
                        value={know_about_us}
                        onChange={this.handleChange}
                        placeholder="How did you hear about us?" />
                </div>
                <div>
                    <Link to='/skill'>
                        <button
                            name='info' 
                            type='submit' 
                            disabled={this.props.handleDisabled(errorInfo)} 
                            onClick={(event) => {this.props.onNext(false, this.state, event)}}>
                        Next
                        </button>
                    </Link>
                </div>
            </div>
        )
    }
}

export default Information;
