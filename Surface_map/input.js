
// Input file

title = 'Surface maps'

framec='Teal'

v[0] = ['m']
t[0] = v[0]
v[1] = ['00000000']
t[1] = ['00000000']
v[2] = ['00000000']
t[2] = ['ALL']
v[3] =['ALL'] ;
t[3] = v[3] ;
v[4] = ['PS','TT','FF','QQ','RH','PE24','VI']
t[4] = ['Mslp','T2m','U10m','Q2m','Rh2m','24h Precipitation','Visibility']
v[5] =[0]
v[5] =v[5].reverse()
t[5] =v[5]
v[6] =['REF','FIX']
t[6] =v[6]
v[7] =['00','01','02','03','04','05','06','07','08','09','10','11','12','13','14','15','16','17','18','19','20','21','22','23'] ;
t[7] = v[7] ;
v[8] = ['b','r'];
t[8] = ['Bias','Rmse'];
v[9] =['00','06','12','18'] ;
t[9] = v[9] ;

spec_name =[0,8,1,2,3,9,7,6,4,5]

mname = ['Type','Period','Station','Selection','Parameter','Level','Exp','Hour','Error','Initial time']
loc =['l','l','t','t','t','l','l','l','l','l','l']
do_debug = false ;
pdir ='Surface/'
ext='1.png'
help = 'cdnc profile verification comparison'; hide_help = false ;
do_send = true ;
do_show_remember = true ;
do_remember = true ;
my_con_txt=['Graphics','Quality control','Stat']
my_con=['All','Surface/quality_[1].html','Surface/TABLE_LL_[1]_[3].html']

