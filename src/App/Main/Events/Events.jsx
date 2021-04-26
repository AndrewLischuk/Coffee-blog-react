import React from 'react'
import event1 from './event1.jpg'
import event2 from './event2.jpg'
import event3 from './event3.jpg'
import event4 from './event4.jpg'
import event5 from './event5.jpg'
import event6 from './event6.jpg'
import event7 from './event7.jpg'
import event8 from './event8.jpg'
import './events.css'

const Events = () => {
    return (
        <section className="events flex-row-between">
            <div className="flex-column-left col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                <div className="box box-cut"><img className="box-img" src={event1} alt="" />
                    <div className="links-panel flex-row-between">
                        <a href=""><i className="fas fa-search"></i></a>
                        <a href=""><i className="fas fa-link"></i></a>
                    </div>
                    <div className="box-overlay"></div>
                </div>
                <div className="event-block">
                    <div className="cathegory-ev">Cathegory: <a href=""><span> Meeting</span></a> </div>
                    <div className="date-ev"><i className="fas fa-user-tie"></i> <a href=""><span>Admin</span> </a>at <i className="far fa-clock"></i> <a href=""><span>March 4 2021</span></a> </div>
                    <div className="title-ev">Vivamus hendrerit wisi ded non</div>
                    <div className="text-ev">Morbi mauris nec massa quis ante. Morbi tincidunt. Maecenas eget
                    volutpat quis,
                    libero. Maecenas pellentesque eget, vestibulum tristique sem. Cras vitae erat augue,
                                            ullamcorper.</div>
                    <div className="more-ev flex-row-between">
                        <div><i className="far fa-heart"></i> 61</div><a href=""><span><i
                            className="far fa-file-alt"></i> Read more</span></a>
                    </div>
                </div>
            </div>
            <div className="flex-column-left col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                <div className="box box-cut"><img className="box-img" src={event2} alt="" />
                    <div className="links-panel flex-row-between">
                        <a href=""><i className="fas fa-search"></i></a>
                        <a href=""><i className="fas fa-link"></i></a>
                    </div>
                    <div className="box-overlay"></div>
                </div>
                <div className="event-block">
                    <div className="cathegory-ev">Cathegory: <a href=""><span> Recipes</span></a> </div>
                    <div className="date-ev"><i className="fas fa-user-tie"></i> <a href=""><span>Admin</span> </a>
                                            at <i className="far fa-clock"></i> <a href=""><span>March 4 2021</span></a> </div>
                    <div className="title-ev">Lorem ipsum dolor sit amet.</div>
                    <div className="text-ev">Morbi mauris nec massa quis ante. Morbi tincidunt. Maecenas eget
                    volutpat quis,
                    libero. Maecenas pellentesque eget, vestibulum tristique sem. Cras vitae erat augue,
                                            ullamcorper.</div>
                    <div className="more-ev flex-row-between">
                        <div><i className="far fa-heart"></i> 61</div><a href=""><span><i
                            className="far fa-file-alt"></i> Read more</span></a>
                    </div>
                </div>
            </div>
            <div className="flex-column-left col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                <div className="box box-cut"><img className="box-img" src={event3} alt="" />
                    <div className="links-panel flex-row-between">
                        <a href=""><i className="fas fa-search"></i></a>
                        <a href=""><i className="fas fa-link"></i></a>
                    </div>
                    <div className="box-overlay"></div>
                </div>
                <div className="event-block">
                    <div className="cathegory-ev">Cathegory: <a href=""><span> Live music</span></a> </div>
                    <div className="date-ev"><i className="fas fa-user-tie"></i> <a href=""><span>Admin</span> </a>
                                            at <i className="far fa-clock"></i> <a href=""><span>March 4 2021</span></a></div>
                    <div className="title-ev">Sit amet consectetur adipisicing elit</div>
                    <div className="text-ev">Morbi mauris nec massa quis ante. Morbi tincidunt. Maecenas eget
                    volutpat quis,
                    libero. Maecenas pellentesque eget, vestibulum tristique sem. Cras vitae erat augue,
                                            ullamcorper.</div>
                    <div className="more-ev flex-row-between">
                        <div><i className="far fa-heart"></i> 61</div><a href=""><span><i
                            className="far fa-file-alt"></i> Read more</span></a>
                    </div>
                </div>
            </div>
            <div className="flex-column-left col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                <div className="box box-cut"><img className="box-img" src={event4} alt="" />
                    <div className="links-panel flex-row-between">
                        <a href=""><i className="fas fa-search"></i></a>
                        <a href=""><i className="fas fa-link"></i></a>
                    </div>
                    <div className="box-overlay"></div>
                </div>
                <div className="event-block">
                    <div className="cathegory-ev">Cathegory: <a href=""><span> Stuff</span></a> </div>
                    <div className="date-ev"><i className="fas fa-user-tie"></i> <a href=""><span>Admin</span> </a>
                                            at <i className="far fa-clock"></i> <a href=""><span>March 4 2021</span></a> </div>
                    <div className="title-ev">Fuga eveniet dolor ab nihil</div>
                    <div className="text-ev">Morbi mauris nec massa quis ante. Morbi tincidunt. Maecenas eget
                    volutpat quis,
                    libero. Maecenas pellentesque eget, vestibulum tristique sem. Cras vitae erat augue,
                                            ullamcorper.</div>
                    <div className="more-ev flex-row-between">
                        <div><i className="far fa-heart"></i> 61</div><a href=""><span><i
                            className="far fa-file-alt"></i> Read more</span></a>
                    </div>
                </div>
            </div>
            <div className="flex-column-left col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                <div className="box box-cut"><img className="box-img" src={event5} alt="" />
                    <div className="links-panel flex-row-between">
                        <a href=""><i className="fas fa-search"></i></a>
                        <a href=""><i className="fas fa-link"></i></a>
                    </div>
                    <div className="box-overlay"></div>
                </div>
                <div className="event-block">
                    <div className="cathegory-ev">Cathegory: <a href=""><span> Meeting</span></a> </div>
                    <div className="date-ev"><i className="fas fa-user-tie"></i> <a href=""><span>Admin</span> </a>
                                            at <i className="far fa-clock"></i> <a href=""><span>March 4 2021</span></a> </div>
                    <div className="title-ev">Fuga eveniet dolor ab nihil</div>
                    <div className="text-ev">Morbi mauris nec massa quis ante. Morbi tincidunt. Maecenas eget
                    volutpat quis,
                    libero. Maecenas pellentesque eget, vestibulum tristique sem. Cras vitae erat augue,
                                            ullamcorper.</div>
                    <div className="more-ev flex-row-between">
                        <div><i className="far fa-heart"></i> 61</div><a href=""><span><i
                            className="far fa-file-alt"></i> Read more</span></a>
                    </div>
                </div>
            </div>
            <div className="flex-column-left col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                <div className="box box-cut"><img className="box-img" src={event6} alt="" />
                    <div className="links-panel flex-row-between">
                        <a href=""><i className="fas fa-search"></i></a>
                        <a href=""><i className="fas fa-link"></i></a>
                    </div>
                    <div className="box-overlay"></div>
                </div>
                <div className="event-block">
                    <div className="cathegory-ev">Cathegory: <a href=""><span> Recipes</span></a> </div>
                    <div className="date-ev"><i className="fas fa-user-tie"></i> <a href=""><span>Admin</span> </a>
                                            at <i className="far fa-clock"></i> <a href=""><span>March 4 2021</span></a> </div>
                    <div className="title-ev">Fuga eveniet dolor ab nihil</div>
                    <div className="text-ev">Morbi mauris nec massa quis ante. Morbi tincidunt. Maecenas eget
                    volutpat quis,
                    libero. Maecenas pellentesque eget, vestibulum tristique sem. Cras vitae erat augue,
                                            ullamcorper.</div>
                    <div className="more-ev flex-row-between">
                        <div><i className="far fa-heart"></i> 61</div><a href=""><span><i
                            className="far fa-file-alt"></i> Read more</span></a>
                    </div>
                </div>
            </div>
            <div className="flex-column-left col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                <div className="box box-cut"><img className="box-img" src={event7} alt="" />
                    <div className="links-panel flex-row-between">
                        <a href=""><i className="fas fa-search"></i></a>
                        <a href=""><i className="fas fa-link"></i></a>
                    </div>
                    <div className="box-overlay"></div>
                </div>
                <div className="event-block">
                    <div className="cathegory-ev">Cathegory: <a href=""><span> Recipes</span></a> </div>
                    <div className="date-ev"><i className="fas fa-user-tie"></i> <a href=""><span>Admin</span> </a>
                                            at <i className="far fa-clock"></i> <a href=""><span>March 4 2021</span></a> </div>
                    <div className="title-ev">Fuga eveniet dolor ab nihil</div>
                    <div className="text-ev">Morbi mauris nec massa quis ante. Morbi tincidunt. Maecenas eget
                    volutpat quis,
                    libero. Maecenas pellentesque eget, vestibulum tristique sem. Cras vitae erat augue,
                                            ullamcorper.</div>
                    <div className="more-ev flex-row-between">
                        <div><i className="far fa-heart"></i> 61</div><a href=""><span><i
                            className="far fa-file-alt"></i> Read more</span></a>
                    </div>
                </div>
            </div>
            <div className="flex-column-left col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                <div className="box box-cut"><img className="box-img" src={event8} alt="" />
                    <div className="links-panel flex-row-between">
                        <a href=""><i className="fas fa-search"></i></a>
                        <a href=""><i className="fas fa-link"></i></a>
                    </div>
                    <div className="box-overlay"></div>
                </div>
                <div className="event-block">
                    <div className="cathegory-ev">Cathegory: <a href=""><span> Stuff</span></a> </div>
                    <div className="date-ev"><i className="fas fa-user-tie"></i> <a href=""><span>Admin</span> </a>
                                            at <i className="far fa-clock"></i> <a href=""><span>March 4 2021</span></a> </div>
                    <div className="title-ev">Fuga eveniet dolor ab nihil</div>
                    <div className="text-ev">Morbi mauris nec massa quis ante. Morbi tincidunt. Maecenas eget
                    volutpat quis,
                    libero. Maecenas pellentesque eget, vestibulum tristique sem. Cras vitae erat augue,
                                            ullamcorper.</div>
                    <div className="more-ev flex-row-between">
                        <div><i className="far fa-heart"></i> 61</div><a href=""><span><i
                            className="far fa-file-alt"></i> Read more</span></a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Events