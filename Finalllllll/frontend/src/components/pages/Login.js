import React from "react";
import {Link} from 'react-router-dom';




function Login(){
    return (
                    <div class="wrapper fadeInDown">
                        <div id="formContent">{/* <!-- Tabs Titles --> */}
                        </div>
                        

                            {/* <!-- Icon --> */}
                            <div class="fadeIn first">
                            <img src="http://danielzawadzki.com/codepen/01/icon.svg" id="icon" alt="User Icon" />
                            </div>
                            
                                {/* <!-- Login Form --> */}
                                <form>
                                <input type="text" id="login" class="fadeIn second" name="log" placeholder="login"></input>
                                <input type="text" id="password" class="fadeIn third" name="log" placeholder="password"></input>
                                <input type="submit" class="fadeIn fourth" value="Log In"></input>
                                </form>
                                

                                {/* <!-- Remind Passowrd --> */}
                                <div id="formFooter">
                                <a class="underlineHover" href="#">Forgot Password?</a>
                                </div>
                                
                    </div>
    );
}
export default Login;
