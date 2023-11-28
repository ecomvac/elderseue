import React, { useContext } from 'react'
import SectionWrapper from '../../../../../Shared/SectionWrapper'
import { trendsData } from '../../../../../assets/singleElderlyData'
import { Icon } from '@iconify/react'
import { SidebarContext } from '../../../../../Context/CustomContext'

const ElderlyTrends = () => {
  const { setinnerOverView, setActiveTrend } = useContext(SidebarContext)
  const averageTrends = trendsData.filter((data) => data.category === 'Average')
  const warningTrends = trendsData.filter((data) => data.category === 'Warning')
  const criticalTrends = trendsData.filter((data) => data.category === 'Critical')

const handleTrend=(title)=>{
  setActiveTrend(title)
  setinnerOverView(false)
  
}
  return (
    <>
      <SectionWrapper>
        <div className='py-6 px-4'>
          <h2 className='px-[22px] text-text-primary font-bold text-2xl mb-5'>Elderly Trends</h2>
          <div className=' grid grid-cols-2 xl:grid-cols-3 gap-8'>
            {/* -----------------------average trends---------------------- */}
            <div className=''>
              <div className=' bg-[#58CB6C] w-full h-[4px] rounded-[18px]'></div>
              <div className='mt-[8px]'>
                <h2 className=' text-[19px] font-bold text-text-primary'>Average</h2>
                <p className=' text-[13px] font-normal text-text-primary/60 min-h-[40px]'>Everything is stable with elderly trends.</p>
              </div>
              <div className='mt-6'>
                <div className='flex flex-col gap-[14px]'>
                  {
                    averageTrends.map((trend, index) => <>
                      <button onClick={()=>handleTrend(trend?.title)}>
                        <div className='border rounded-[18px] p-[14px]'>
                          <div className='flex items-center gap-2'>
                            <span className='bg-[#58CB6C] text-white p-2.5 rounded-[10px] text-[19px]'>
                              {trend.title === 'Waking up time' && (<Icon icon="gala:clock" />)}
                              {trend.title === 'Going in bed time' && (<Icon icon="mdi:bed-time" />)}
                              {trend.title === 'Rooms Visited' && (<Icon icon="bx:door-open" />)}
                              {trend.title === 'Time at Home' && (<Icon icon="heroicons:home" />)}
                              {trend.title === 'Time outdoors' && (<Icon icon="gridicons:phone" />)}
                              {trend.title === 'Device Usage Time' && (<Icon icon="bx:walk" />)}
                              {trend.title === 'Sleeping Score' && (<Icon icon="icon-park-twotone:sleep-two" />)}
                              {trend.title === 'Showers' && (<Icon icon="material-symbols:shower-outline" />)}
                              {trend.title === 'Coffees' && (<Icon icon="ph:coffee" />)}
                              {trend.title === 'Bathroom Visited' && (<Icon icon="mdi:toilet" />)}
                            </span>
                            <span className='flex flex-col'>
                              <span className='text-text-primary font-medium text-[19px]'>{trend.title}</span>
                              <span className='text-[13px] -mt-1 text-text-primary/60'>{trend.subTitle}</span>
                            </span>
                          </div>
                          <div className='mt-5 flex items-center justify-between flex-wrap gap-4'>
                            <span>
                              <span className='flex items-center gap-2 text-text-secondary'>
                                <span className='text-base'><Icon icon="streamline:target-solid" /></span>
                                <span className='text-[15px] font-medium '>{trend.target}
                                  {
                                    trend.type === 'x' && <span>x</span>
                                  }
                                  {
                                    trend.type === 'hr' && <span>hr</span>
                                  }
                                  {
                                    trend.type === 'percent' && <span>%</span>
                                  }
                                  <span className='ml-1'>Target</span></span>
                              </span>
                              <span className='flex items-center gap-1 text-text-secondary'>
                                <img src={'/images/avrg.svg'} alt="" />
                                <span className='text-[15px] font-medium '>{trend.present}
                                  {
                                    trend.type === 'x' && <span>x</span>
                                  }
                                  {
                                    trend.type === 'hr' && <span>hr</span>
                                  }
                                  {
                                    trend.type === 'percent' && <span>%</span>
                                  }
                                </span>
                              </span>
                            </span>
                            <span className='flex flex-col'>
                              <span className='flex items-center justify-center text-[#58CB6C] text-xl font-bold gap-1'>
                                <img src={'/images/avrg2.svg'} alt="" />
                                <span>
                                  {Number(trend.present) > Number(trend.target) ? '+':'-'}
                                  {trend.diff}
                                  {
                                    trend.type === 'x' && <span>x</span>
                                  }
                                  {
                                    trend.type === 'hr' && <span>hr</span>
                                  }
                                  {
                                    trend.type === 'percent' && <span>%</span>
                                  }
                                </span>
                              </span>
                              <span className='text-[13px] font-normal text-text-primary/50'>
                                {Number(trend.present) > Number(trend.target) ? 'More ' : 'Less '}
                                Than Target
                              </span>
                            </span>
                          </div>
                        </div>
                      </button>
                    </>)
                  }
                  <button className='border rounded-lg p-2.5 w-full flex items-center justify-center gap-1 text-[13px] font-normal text-text-primary/50'>Load More <span><Icon className='text-lg' icon="ant-design:arrow-down-outlined" /></span></button>
                </div>
              </div>
            </div>
            {/* -------------------------warning trends-------------------- */}
            <div className=''>
              <div className=' bg-Warning w-full h-[4px] rounded-[18px]'></div>
              <div className='mt-[8px]'>
                <h2 className=' text-[19px] font-bold text-text-primary'>Warning</h2>
                <p className=' text-[13px] font-normal text-text-primary/60 min-h-[40px]'>Emerging concerns in elderly trends, monitor closely.</p>
              </div>
              <div className='mt-6'>
                <div className='flex flex-col gap-[14px]'>
                  {
                    warningTrends.map((trend, index) => <>
                      <button onClick={()=>handleTrend(trend?.title)}>
                        <div className='border rounded-[18px] p-[14px]'>
                          <div className='flex items-center gap-2'>
                            <span className='bg-Warning text-white p-2.5 rounded-[10px] text-[19px]'>
                              {trend.title === 'Waking up time' && (<Icon icon="gala:clock" />)}
                              {trend.title === 'Going in bed time' && (<Icon icon="mdi:bed-time" />)}
                              {trend.title === 'Rooms Visited' && (<Icon icon="bx:door-open" />)}
                              {trend.title === 'Time at Home' && (<Icon icon="heroicons:home" />)}
                              {trend.title === 'Time outdoors' && (<Icon icon="gridicons:phone" />)}
                              {trend.title === 'Device Usage Time' && (<Icon icon="bx:walk" />)}
                              {trend.title === 'Sleeping Score' && (<Icon icon="icon-park-twotone:sleep-two" />)}
                              {trend.title === 'Showers' && (<Icon icon="material-symbols:shower-outline" />)}
                              {trend.title === 'Coffees' && (<Icon icon="ph:coffee" />)}
                              {trend.title === 'Bathroom Visited' && (<Icon icon="mdi:toilet" />)}
                            </span>
                            <span className='flex flex-col'>
                              <span className='text-text-primary font-medium text-[19px]'>{trend.title}</span>
                              <span className='text-[13px] -mt-1 text-text-primary/60'>{trend.subTitle}</span>
                            </span>
                          </div>
                          <div className='mt-5 flex items-center justify-between flex-wrap gap-4'>
                            <span>
                              <span className='flex items-center gap-2 text-text-secondary'>
                                <span className='text-base'><Icon icon="streamline:target-solid" /></span>
                                <span className='text-[15px] font-medium '>{trend.target}
                                  {
                                    trend.type === 'x' && <span>x</span>
                                  }
                                  {
                                    trend.type === 'hr' && <span>hr</span>
                                  }
                                  {
                                    trend.type === 'percent' && <span>%</span>
                                  } <span className='ml-1'>
                                    Target</span></span>
                              </span>
                              <span className='flex items-center gap-2 text-text-secondary'>
                                <span className='text-lg text-Warning'>
                                  {Number(trend.present) > Number(trend.target) ? <Icon icon="emojione-monotone:up-arrow" /> : <Icon icon="emojione-monotone:down-arrow" />}

                                </span>
                                <span className='text-[15px] font-medium '>{trend.present}
                                  {
                                    trend.type === 'x' && <span>x</span>
                                  }
                                  {
                                    trend.type === 'hr' && <span>hr</span>
                                  }
                                  {
                                    trend.type === 'percent' && <span>%</span>
                                  }
                                </span>
                              </span>
                            </span>
                            <span className='flex flex-col'>
                              <span className='flex items-center justify-center text-Warning text-xl font-bold gap-1'>
                                <span>
                                  {Number(trend.present) > Number(trend.target) ? <Icon icon="material-symbols:trending-up" /> : <Icon icon="uil:chart-down" />}
                                </span>
                                <span>
                                  {Number(trend.present) > Number(trend.target) ? '+':'-'}
                                  {trend.diff}
                                  {
                                    trend.type === 'x' && <span>x</span>
                                  }
                                  {
                                    trend.type === 'hr' && <span>hr</span>
                                  }
                                  {
                                    trend.type === 'percent' && <span>%</span>
                                  }
                                </span>
                              </span>
                              <span className='text-[13px] font-normal text-text-primary/50'>{Number(trend.present) > Number(trend.target) ? 'More ' : 'Less '}
                                Than Target</span>
                            </span>
                          </div>
                        </div>
                      </button>
                    </>)
                  }
                </div>
              </div>
            </div>
            {/* -------------------Critical trends----------------- */}
            <div className=''>
              <div className=' bg-Critical w-full h-[4px] rounded-[18px]'></div>
              <div className='mt-[8px]'>
                <h2 className=' text-[19px] font-bold text-text-primary'>Critical</h2>
                <p className=' text-[13px] font-normal text-text-primary/60 min-h-[40px]'>Urgent action required, elderly trends have reached a critical point.</p>
              </div>
              <div className='mt-6'>
                <div className='flex flex-col gap-[14px]'>
                  {
                    criticalTrends.map((trend, index) => <>
                      <button onClick={()=>handleTrend(trend?.title)}>
                        <div className='border rounded-[18px] p-[14px]'>
                          <div className='flex items-center gap-2'>
                            <span className='bg-Critical text-white p-2.5 rounded-[10px] text-[19px]'>
                              {trend.title === 'Waking up time' && (<Icon icon="gala:clock" />)}
                              {trend.title === 'Going in bed time' && (<Icon icon="mdi:bed-time" />)}
                              {trend.title === 'Rooms Visited' && (<Icon icon="bx:door-open" />)}
                              {trend.title === 'Time at Home' && (<Icon icon="heroicons:home" />)}
                              {trend.title === 'Time outdoors' && (<Icon icon="gridicons:phone" />)}
                              {trend.title === 'Device Usage Time' && (<Icon icon="bx:walk" />)}
                              {trend.title === 'Sleeping Score' && (<Icon icon="icon-park-twotone:sleep-two" />)}
                              {trend.title === 'Showers' && (<Icon icon="material-symbols:shower-outline" />)}
                              {trend.title === 'Coffees' && (<Icon icon="ph:coffee" />)}
                              {trend.title === 'Bathroom Visited' && (<Icon icon="mdi:toilet" />)}
                            </span>
                            <span className='flex flex-col'>
                              <span className='text-text-primary font-medium text-[19px]'>{trend.title}</span>
                              <span className='text-[13px] -mt-1 text-text-primary/60'>{trend.subTitle}</span>
                            </span>
                          </div>
                          <div className='mt-5 flex items-center justify-between flex-wrap gap-4'>
                            <span>
                              <span className='flex items-center gap-2 text-text-secondary'>
                                <span className='text-base'><Icon icon="streamline:target-solid" /></span>
                                <span className='text-[15px] font-medium '>{trend.target}
                                  {
                                    trend.type === 'x' && <span>x</span>
                                  }
                                  {
                                    trend.type === 'hr' && <span>hr</span>
                                  }
                                  {
                                    trend.type === 'percent' && <span>%</span>
                                  }
                                  <span className='ml-1'>Target</span></span>
                              </span>
                              <span className='flex items-center gap-2 text-text-secondary'>
                                <span className='text-lg text-Critical'>
                                  {Number(trend.present) > Number(trend.target) ? <Icon icon="emojione-monotone:up-arrow" /> : <Icon icon="emojione-monotone:down-arrow" />}

                                </span>
                                <span className='text-[15px] font-medium '>{trend.present}
                                  {
                                    trend.type === 'x' && <span>x</span>
                                  }
                                  {
                                    trend.type === 'hr' && <span>hr</span>
                                  }
                                  {
                                    trend.type === 'percent' && <span>%</span>
                                  }
                                </span>
                              </span>
                            </span>
                            <span className='flex flex-col'>
                              <span className='flex items-center justify-center text-Critical text-xl font-bold gap-1'>
                                <span><span>
                                  {Number(trend.present) > Number(trend.target) ? <Icon icon="material-symbols:trending-up" /> : <Icon icon="uil:chart-down" />}
                                </span></span>
                                <span>
                                  {Number(trend.present) > Number(trend.target) ? '+':'-'}
                                  {(trend.diff)}
                                  {
                                    trend.type === 'x' && <span>x</span>
                                  }
                                  {
                                    trend.type === 'hr' && <span>hr</span>
                                  }
                                  {
                                    trend.type === 'percent' && <span>%</span>
                                  }
                                </span>
                              </span>
                              <span className='text-[13px] font-normal text-text-primary/50'>{Number(trend.present) > Number(trend.target) ? 'More ' : 'Less '}
                                Than Target</span>
                            </span>
                          </div>
                        </div>
                      </button>
                    </>)
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </>
  )
}

export default ElderlyTrends