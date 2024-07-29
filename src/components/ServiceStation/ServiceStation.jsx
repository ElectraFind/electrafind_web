import React, { useState } from 'react'
import './ServiceStation.css'

const ServiceStation = () => {
    const [formData, setFormData] = useState({
        name: '',
        address: '',
        googleMapLink: '',
        telephone: ''
    });
  
    const [errors, setErrors] = useState({});
  
    const validate = () => {
        const newErrors = {};
        if (!formData.name) newErrors.name = 'Name is required';
        if (!formData.address) newErrors.address = 'Address is required';
        if (!formData.googleMapLink) newErrors.googleMapLink = 'Google Map link is required';
        if (!formData.telephone) {
            newErrors.telephone = 'Telephone number is required';
        } else if (!/^0\d{9}$/.test(formData.telephone)) {
            newErrors.telephone = 'Telephone number must be 10 digits and start with 0';
        }
        return newErrors;
    };
  
    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
        } else {
            setErrors({});
            console.log('Form Data:', formData);
            // Submit form data
        }
    };
  
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    return (
        <div className="service-container">
            <div className="form-container">            
                <form onSubmit={handleSubmit}>
                    <h2>Service Station Registration Form</h2>
                    <div className="input-box">
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                        {errors.name && <p className="error-message">{errors.name}</p>}
                    </div>

                    <div className="input-box">
                        <input
                            type="text"
                            id="address"
                            name="address"
                            placeholder="Address"
                            value={formData.address}
                            onChange={handleChange}
                            required
                        />
                        {errors.address && <p className="error-message">{errors.address}</p>}
                    </div>
                    
                    <div className="input-box">
                        <input
                            type="url"
                            id="googleMapLink"
                            name="googleMapLink"
                            placeholder="Google Map Location Link"
                            value={formData.googleMapLink}
                            onChange={handleChange}
                            required
                        />
                        {errors.googleMapLink && <p className="error-message">{errors.googleMapLink}</p>}
                    </div>
                    
                    <div className="input-box">
                        <input
                            type="tel"
                            id="telephone"
                            name="telephone"
                            placeholder="Telephone Number"
                            value={formData.telephone}
                            onChange={handleChange}
                            required
                        />
                        {errors.telephone && <p className="error-message">{errors.telephone}</p>}
                    </div>
                    
                    <button type="submit" className="btn">Submit</button>
                </form>
            </div>
            <div className="service-benefit">
                <h1>Provide Your EV Services with ElectraFind</h1>
                <p>Join ElectraFind and offer your EV services to a growing community of electric vehicle drivers. As a service station owner, you can increase your visibility and customer base by being featured on our app, while helping to expand the EV charging network across Sri Lanka. By partnering with us, you contribute to a greener future and attract more customers to your location.</p>
                <p1>View currently available service stations below.</p1>
            </div>
        </div>
    )
}

export default ServiceStation